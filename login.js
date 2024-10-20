document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;  // Get the selected role

    // Simulate login process (this can be replaced with real authentication)
    if (email === "user@example.com" && password === "user123" && role === "user") {
        window.location.href = "user-dashboard.html";  // Redirect to User Dashboard
    } else if (email === "provider@example.com" && password === "provider123" && role === "provider") {
        window.location.href = "dashboard.html";  // Redirect to Service Provider Profile
    } else {
        alert("Invalid login credentials or role.");
    }
});
