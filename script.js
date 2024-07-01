// Get the form element
const contactForm = document.querySelector('#contactForm');

// Get data from form inputs
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const consentInput = document.querySelector('#consent');

// Declare variables to hold form data
let firstName = '';
let lastName = '';
let email = '';
let queryType = '';
let message = '';
let consent = false;

// Event listeners for change events on inputs
firstNameInput.addEventListener('change', (e) => { firstName = e.target.value; });
lastNameInput.addEventListener('change', (e) => { lastName = e.target.value; });
emailInput.addEventListener('change', (e) => { email = e.target.value; });
messageInput.addEventListener('change', (e) => { message = e.target.value; });
consentInput.addEventListener('change', (e) => { consent = e.target.checked; });

// Event listener for change events on radio buttons
document.querySelectorAll('input[name="query-type"]').forEach((radio) => {
    radio.addEventListener('change', (e) => { queryType = e.target.value; });
});

// Event listener for form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (firstName && lastName && email && queryType && message && consent) {
        // Store user data in local storage
        localStorage.setItem('firstname', firstName);
        localStorage.setItem('lastname', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('queryType', queryType);
        localStorage.setItem('message', message);
        localStorage.setItem('consent', consent);
        // Redirect to another page or show success message
        alert('Form values have been saved to local storage.');
    } else {
        alert('Please enter all your details and agree to be contacted.');
    }
});