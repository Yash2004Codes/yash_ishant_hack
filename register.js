document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;  // Get the selected role

    // Simulate registration process (this can be replaced with real server-side handling)
    if (name && email && password && role) {
        alert(`${role === "provider" ? "Service Provider" : "User"} registered successfully!`);

        // Redirect to the appropriate dashboard or login page after successful registration
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
});
