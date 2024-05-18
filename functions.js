function displayWelcomeMessage() {
    var welcomeElement = document.getElementById('welcomeMessage');
    var message = 'Welcome to our law firm\'s website. We are committed to providing you the best legal services.';
    welcomeElement.textContent = message;
}
window.onload = displayWelcomeMessage;

document.getElementById('contactForm').addEventListener('submit', function(event) {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (firstName === '' || lastName === '' || email === '' || message === '') {
        alert('All fields are required.');
        event.preventDefault();
    } else if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});