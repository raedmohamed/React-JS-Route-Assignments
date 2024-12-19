import { displayGames } from "./ui.module.js";
import { cartona } from "./ui.module.js";
import { getDetails } from "./details.module.js";
import { loader } from "./ui.module.js";
import { hero } from "./ui.module.js";
export async function getGames(category = "mmorpg") {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d7abf8732emsh824336a1d883953p15fc8djsn3f73a4675ade",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  hero.classList.add("d-none");
  loader.classList.replace("d-none", "d-flex");
  try {
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${category}&sort-by=release-date`,
      options
    );
    const response = await api.json();

    const games = response.map((gameData) => new Game(gameData));
    hero.classList.remove("d-none");
    loader.classList.replace("d-flex", "d-none");
    displayGames(games);
    cartona.addEventListener("click", (event) => {
      event.stopPropagation();
      let card = event.target.closest(".card");

      if (card) {
        const title = card.querySelector(".card-title").textContent;
        const clickedGame = games.find((game) => game.title === title);

        if (clickedGame) {
          getDetails(clickedGame.id);
        }
      }
    });
  } catch (error) {
    console.error(error);
    hero.classList.remove("d-none");
    loader.classList.replace("d-flex", "d-none");
  }
}

class Game {
  constructor(gameData) {
    this.id = gameData.id;
    this.thumbnail = gameData.thumbnail;
    this.title = gameData.title;
    this.shortDescription = gameData.short_description;
    this.genre = gameData.genre;
    this.platform = gameData.platform;
  }
}
