from flask import Flask, request, jsonify

app = Flask(__name__)

# Define user roles and permissions (can be stored in a database)
ROLES = {
    'admin': ['create_user', 'delete_user', 'update_content'],
    'moderator': ['update_content'],
    'user': ['view_content']
}

# Simulated user data (can be stored in a database)
USERS = {
    'user1': {'username': 'user1', 'password': 'password', 'role': 'user'},
    'admin1': {'username': 'admin1', 'password': 'password', 'role': 'admin'},
    'moderator1': {'username': 'moderator1', 'password': 'password', 'role': 'moderator'}
}

# Authentication endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if user exists and password is correct
    if username in USERS and USERS[username]['password'] == password:
        return jsonify({'message': 'Login successful', 'role': USERS[username]['role']}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

# Endpoint to get user roles and permissions
@app.route('/roles', methods=['GET'])
def get_roles():
    return jsonify(ROLES)

if __name__ == '__main__':
    app.run(debug=True)
