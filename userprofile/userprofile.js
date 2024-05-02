document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('save-btn');
    const bioField = document.getElementById('bio');
    const contactInfoField = document.getElementById('contact_info');
    const messageDiv = document.getElementById('message');

    // Function to save profile changes
    saveBtn.addEventListener('click', function() {
        const bio = bioField.value;
        const contactInfo = contactInfoField.value;
        // Validate input fields here if needed

        // Send AJAX request to update profile
        const username = 'example_user'; // Replace with actual username
        const url = `/profiles/${username}`;
        const data = {
            bio: bio,
            contact_info: contactInfo
            // Add more fields as needed
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                messageDiv.textContent = 'Profile updated successfully';
            } else {
                messageDiv.textContent = 'Error updating profile';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'Error updating profile';
        });
    });
});
