function displayWelcomeMessage() {
    // Get the element where the welcome message will be displayed
    var welcomeElement = document.getElementById('welcomeMessage');

    // Define the welcome message
    var message = 'Welcome to our law firm\'s website. We are committed to providing you the best legal services.';

    // Display the welcome message
    welcomeElement.textContent = message;
}

// Call the function when the page is loaded
window.onload = displayWelcomeMessage;