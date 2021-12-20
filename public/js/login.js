const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-input');
    const passwordEl = document.querySelector('#password-input');
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace('/buildyourown.html');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('.login-btn')
    .addEventListener('submit', loginFormHandler);




   
  