# Import necessary libraries
from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy data for user profiles (replace with actual database)
user_profiles = {}

# Route for creating a new user profile
@app.route('/profiles', methods=['POST'])
def create_profile():
    data = request.json
    username = data.get('username')
    profile_data = {
        'username': username,
        'bio': data.get('bio'),
        'contact_info': data.get('contact_info'),
        # Add more fields like profile picture URL, etc.
    }
    user_profiles[username] = profile_data
    return jsonify({'message': 'Profile created successfully'}), 201

# Route for retrieving a user profile
@app.route('/profiles/<username>', methods=['GET'])
def get_profile(username):
    if username in user_profiles:
        return jsonify(user_profiles[username])
    else:
        return jsonify({'message': 'Profile not found'}), 404

# Route for updating an existing user profile
@app.route('/profiles/<username>', methods=['PUT'])
def update_profile(username):
    if username in user_profiles:
        data = request.json
        user_profiles[username]['bio'] = data.get('bio', user_profiles[username]['bio'])
        user_profiles[username]['contact_info'] = data.get('contact_info', user_profiles[username]['contact_info'])
        # Update other fields as needed
        return jsonify({'message': 'Profile updated successfully'})
    else:
        return jsonify({'message': 'Profile not found'}), 404

# Route for deleting a user profile
@app.route('/profiles/<username>', methods=['DELETE'])
def delete_profile(username):
    if username in user_profiles:
        del user_profiles[username]
        return jsonify({'message': 'Profile deleted successfully'})
    else:
        return jsonify({'message': 'Profile not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
