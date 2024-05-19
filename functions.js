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

function toggleList() {
    var list = document.getElementById('itemList');
    var button = document.getElementById('showListButton');
    if (list.style.display === 'none') {
        list.style.display = 'block';
        button.textContent = 'Hide List';
    } else {
        list.style.display = 'none';
        button.textContent = 'Achievements';
    }
}

  var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
       }
    });
  }
