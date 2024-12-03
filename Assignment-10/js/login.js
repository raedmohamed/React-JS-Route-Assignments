let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let errorMsg = document.querySelector(".empty-fields");

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  errorMsg.innerText = "";
  errorMsg.classList.remove("text-bg-success", "text-bg-danger");

  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    errorMsg.innerText = "Please fill in both email and password.";
    errorMsg.classList.add("text-bg-danger");
    return;
  }

  let storedData = JSON.parse(localStorage.getItem("data")) || [];
  let loginSuccess = false;

  for (let i = 0; i < storedData.length; i++) {
    let user = storedData[i];

    if (
      user.mail === inputEmail.value.trim() &&
      user.password === inputPassword.value
    ) {
      localStorage.setItem("username", user.name);

      errorMsg.innerText = "Success";
      errorMsg.classList.add("text-bg-success");

      setTimeout(function () {
        window.location.replace("./index.html");
      }, 1000);

      loginSuccess = true;
      break;
    }
  }

  if (!loginSuccess) {
    errorMsg.innerText = "Incorrect email or password";
    errorMsg.classList.add("text-bg-danger");
  }
});
