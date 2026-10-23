function validateForm(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  // Reset errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.getElementById('successMsg').style.display = 'none';

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address';
    isValid = false;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMsg').style.display = 'block';
  }

  return isValid;
}