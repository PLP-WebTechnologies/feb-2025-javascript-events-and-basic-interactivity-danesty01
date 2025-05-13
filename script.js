// Button click event
document.getElementById('changeTextButton').addEventListener('click', () => {
  const textDisplay = document.getElementById('textDisplay');
  textDisplay.textContent = 'You clicked the button! 🎉';
});

// Image gallery hover effect
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    alert(`You clicked on ${image.alt}`);
  });
});

// Form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailFeedback.textContent = 'Please enter a valid email.';
  } else {
    emailFeedback.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters.';
  } else {
    passwordFeedback.textContent = '';
  }
});

document.getElementById('userForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});