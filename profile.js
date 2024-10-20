window.onload = function() {
    // Retrieve user details from localStorage
    const name = localStorage.getItem('name');
    const serviceType = localStorage.getItem('serviceType');
    const email = localStorage.getItem('email');

    // Display user details on profile page
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileServiceType').textContent = serviceType;
    document.getElementById('profileEmail').textContent = email;
};

// Function to simulate connecting with provider
function connectWithProvider() {
    alert("You have successfully connected with the legal service provider!");
}
