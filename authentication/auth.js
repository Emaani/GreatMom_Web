$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        var formData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        // Send a POST request to the login endpoint
        $.ajax({
            type: 'POST',
            url: '/login',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                // Display success message
                $('#message').html('<p class="success-message">' + response.message + '</p>');
            },
            error: function(xhr, textStatus, errorThrown) {
                // Display error message
                $('#message').html('<p class="error-message">' + xhr.responseJSON.message + '</p>');
            }
        });
    });
});
