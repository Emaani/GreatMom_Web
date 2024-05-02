from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    role = data.get('role')

    if username in users:
        return jsonify({'message': 'Username already exists'}), 400

    hashed_password = generate_password_hash(password)

    users[username] = {
        'password': hashed_password,
        'email': email,
        'role': role
    }

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username not in users:
        return jsonify({'message': 'User not found'}), 404

    user = users[username]

    if not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid password'}), 401

    return jsonify({'message': 'Login successful'}), 200

if __name__ == '__main__':
    app.run(debug=True)
