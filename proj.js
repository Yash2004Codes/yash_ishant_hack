const onboardForm = document.getElementById('onboardForm');
const progress = document.getElementById('progress');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const successMessage = document.getElementById('successMessage');

// Handle form submission
onboardForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Form values
    const name = document.getElementById('name').value;
    const serviceType = document.getElementById('serviceType').value;
    const email = document.getElementById('email').value;

    // Check if all fields are filled
    if (name && serviceType && email) {
        // Progress through steps
        progress.style.width = '100%';
        step2.classList.add('completed');
        step3.classList.add('completed');

        // Simulate successful onboarding
        successMessage.style.display = 'block';
        successMessage.textContent = `Thank you, ${name}, for onboarding as a ${serviceType}. Check your email ${email} for your incentive details!`;

        // Reset the form
        onboardForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
