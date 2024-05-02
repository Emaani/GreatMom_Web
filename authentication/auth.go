package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

var users = map[string]map[string]string{}

func register(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var userData map[string]string
	err := decoder.Decode(&userData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	username := userData["username"]
	if _, exists := users[username]; exists {
		http.Error(w, "Username already exists", http.StatusBadRequest)
		return
	}

	password := userData["password"]
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Failed to hash password", http.StatusInternalServerError)
		return
	}

	users[username] = map[string]string{
		"password": string(hashedPassword),
		"email":    userData["email"],
		"role":     userData["role"],
	}

	fmt.Fprintf(w, "User registered successfully")
}

func login(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var userData map[string]string
	err := decoder.Decode(&userData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	username := userData["username"]
	user, exists := users[username]
	if !exists {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	password := userData["password"]
	hashedPassword := user["password"]
	err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	if err != nil {
		http.Error(w, "Invalid password", http.StatusUnauthorized)
		return
	}

	fmt.Fprintf(w, "Login successful")
}

func main() {
	http.HandleFunc("/register", register)
	http.HandleFunc("/login", login)
	http.ListenAndServe(":8080", nil)
}
