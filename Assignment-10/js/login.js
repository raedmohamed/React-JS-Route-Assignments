let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let errorMsg = document.querySelector(".empty-fields");

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  let storedData = JSON.parse(localStorage.getItem("data")) || [];

  for (let i = 0; i < storedData.length; i++) {
    let user = storedData[i];

    if (user.mail === inputEmail.value.trim()) {
      if (user.password === inputPassword.value) {
        localStorage.removeItem("username");

        localStorage.setItem("username", user.name);

        errorMsg.innerText = "Success";
        errorMsg.classList.add("text-bg-success");

        setTimeout(function () {
          window.location.replace("./index.html");
        }, 1000);

        break;
      } else {
        errorMsg.innerText = "Incorrect email or password";
        break;
      }
    }
  }
});
