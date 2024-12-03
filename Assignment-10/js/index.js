
let username = localStorage.getItem("username");


if (username) {

  document.getElementById("welcomeMessage").innerText = `Welcome ${username}`;
} else {

  window.location.replace("./login.html");
}


let logoutBtn = document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", function () {
  
  localStorage.removeItem("username");

 
  window.location.replace("./login.html");
});
