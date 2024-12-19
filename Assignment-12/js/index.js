import { getGames } from "./game.module.js";

getGames();
document.getElementById("controller").addEventListener("click", function (e) {
  if (e.target.matches("button.nav-link")) {
    const activeButton = document.querySelector("button.nav-link.active");

    if (activeButton) {
      activeButton.classList.remove("active");
    }

    e.target.classList.add("active");

    const tab = e.target.getAttribute("data-tab").toLowerCase();
    getGames(tab);
    console.log(tab);
  }
});
