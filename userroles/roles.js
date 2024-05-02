$(document).ready(function() {
    // Fetch user roles and permissions from backend
    $.get('/roles', function(data) {
        const roles = data;
        displayRoles(roles);
    });

    // Function to display user roles and permissions
    function displayRoles(roles) {
        const $rolesContainer = $('#roles');
        $rolesContainer.empty();

        Object.keys(roles).forEach(role => {
            const permissions = roles[role];
            const $roleDiv = $('<div class="role"></div>');
            const $roleTitle = $('<h3></h3>').text(role);
            const $permissionsList = $('<ul></ul>');

            permissions.forEach(permission => {
                const $permissionItem = $('<li></li>').text(permission);
                $permissionsList.append($permissionItem);
            });

            $roleDiv.append($roleTitle, $permissionsList);
            $rolesContainer.append($roleDiv);
        });
    }
});
