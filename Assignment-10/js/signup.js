let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let submitBtn = document.querySelector(".hero-section button[type='submit']");
let errorMsg = document.querySelector(".empty-fields");
let arr = JSON.parse(localStorage.getItem("data")) || [];

function validateField(input) {
  const validations = {
    inputName: {
      regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      message:
        "Name must be at least 3 characters long and can only contain letters and spaces.",
      errorElement: document.getElementById("errorName"),
    },
    inputEmail: {
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address.",
      errorElement: document.getElementById("errorEmail"),
    },
    inputPassword: {
      regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message:
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one digit.",
      errorElement: document.getElementById("errorPassword"),
    },
  };

  const fieldValidation = validations[input.id];
  if (fieldValidation && fieldValidation.regex.test(input.value.trim())) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    fieldValidation.errorElement.innerText = "";
    errorMsg.innerText = "";
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    fieldValidation.errorElement.innerText = fieldValidation.message;
    return false;
  }
}

document.forms[0].addEventListener("input", function (e) {
  validateField(e.target);
});

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    inputName.value.trim().length === 0 ||
    inputEmail.value.trim().length === 0 ||
    inputPassword.value.trim().length === 0
  ) {
    errorMsg.innerText = "All fields are required.";
    return;
  }

  let isNameValid = validateField(inputName);
  let isEmailValid = validateField(inputEmail);
  let isPasswordValid = validateField(inputPassword);

  if (isNameValid && isEmailValid && isPasswordValid) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].mail.trim() === inputEmail.value.trim()) {
        inputEmail.classList.add("is-invalid");
        inputEmail.classList.remove("is-valid");
        errorMsg.innerText =
          "This email is already registered. Please use a different email address.";
        return;
      }
    }

    let obj = {
      name: inputName.value.trim(),
      mail: inputEmail.value.trim(),
      password: inputPassword.value,
    };
    arr.push(obj);
    localStorage.setItem("data", JSON.stringify(arr));
    errorMsg.classList.add("text-bg-success");
    errorMsg.innerText = "success";
    setTimeout(function () {
      window.location.replace("./login.html");
    }, 1000);
  }
});
