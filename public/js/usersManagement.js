const loginFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-input");
  const passwordEl = document.querySelector("#password-input");

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/orders.html");
  } else {
    alert("Failed to login!");
  }
};
const loginbtn = document.querySelector(".login-btn") 
  if (loginbtn) {
    loginbtn.addEventListener("click", loginFormHandler);
  }

const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-input");
  const passwordEl = document.querySelector("#password-input");

  const response = await fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/orders.html");
  } else {
    alert("Failed to signed up!");
  }
};

const signupbtn = document.querySelector("#signupbtn") 
  if (signupbtn) {
    signupbtn.addEventListener("click", signupFormHandler);
  }

const logoutFormHandler = async function (event) {
    event.preventDefault();

    const response = await fetch("/api/users/logout", {
      method: "POST",
       headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/home.html");
    }
  };

  const logoutbtn = document.querySelector("#logout-btn") 
  if (logoutbtn) {
    logoutbtn.addEventListener("click", logoutFormHandler);
  }