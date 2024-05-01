

function nextStep(step) {
    var currentStep = document.getElementById('step-' + step);
    var nextStep = document.getElementById('step-' + (step + 1));
    nextStep.classList.add('show');
  }
  
  function submitForm() {
    alert('Form submitted successfully!');
  }





  document.getElementById('email').addEventListener('input', function() {
    var email = this.value.trim();
    var emailButton = this.nextElementSibling;
    if (email) {
      emailButton.style.color = '#00ff00'; // Change font color to green
      emailButton.style.borderColor = '#00ff00'; // Change border color to green
      emailButton.style.display = 'inline-block'; // Show the button
    } else {
      emailButton.style.color = '#20bb3d'; // Change font color back to default
      emailButton.style.borderColor = '#20bb3d'; // Change border color back to default
      emailButton.style.display = 'none'; // Hide the button
    }
  });
  
  document.getElementById('username').addEventListener('input', function() {
    var username = this.value.trim();
    var usernameButton = this.nextElementSibling;
    if (username) {
      usernameButton.style.color = '#00ff00'; // Change font color to green
      usernameButton.style.borderColor = '#00ff00'; // Change border color to green
      usernameButton.style.display = 'inline-block'; // Show the button
    } else {
      usernameButton.style.color = '#20bb3d'; // Change font color back to default
      usernameButton.style.borderColor = '#20bb3d'; // Change border color back to default
      usernameButton.style.display = 'none'; // Hide the button
    }
  });
  
  document.getElementById('message').addEventListener('input', function() {
    var message = this.value.trim();
    var messageButton = document.getElementById('submitButton');
    if (message) {
      messageButton.style.color = '#00ff00'; // Change font color to green
      messageButton.style.borderColor = '#00ff00'; // Change border color to green
      messageButton.style.display = 'inline-block'; // Show the button
    } else {
      messageButton.style.color = '#20bb3d'; // Change font color back to default
      messageButton.style.borderColor = '#20bb3d'; // Change border color back to default
      messageButton.style.display = 'none'; // Hide the button
    }
  });
  
  const texts = ["Welcome to Sarthak's Portfolio!  Let's get started"];
  const welcomeText = document.querySelector('.signup-content');
  let index = 0;
  let textIndex = 0;
  
  function typeText() {
      if (index < texts[textIndex].length) {
          welcomeText.innerHTML += texts[textIndex][index];
      } else {
          textIndex++;
          welcomeText.innerHTML += "<br>"; 
      }
  
      index++;
  
      if (textIndex < texts.length && index < texts[textIndex].length) {
          setTimeout(typeText, 100); 
      }
  }
  
  typeText();
  