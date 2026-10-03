const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const email = data.get('email').trim();
  const password = data.get('password').trim();

  if (!email || !password) {
    alert(`All form fields must be filled in`);
    return;
  }
  console.log({ email, password });
  form.reset();
});
