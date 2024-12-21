import { displayDetails, loader } from "./ui.module.js";
import { hero } from "./ui.module.js";

export async function getDetails(id) {
  const options = {
    method: "GET",
  };

  hero.classList.add("d-none");
  loader.classList.replace("d-none", "d-flex");

  try {
    const api = await fetch(
      `https://www.freetogame.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();

    if (response && response.id) {
      const gameDetails = new Details(response);

      hero.classList.remove("d-none");
      loader.classList.replace("d-flex", "d-none");

      displayDetails(gameDetails);
      console.log(gameDetails);
    } else {
      console.error("Game details not found.");
      hero.classList.remove("d-none");
      loader.classList.replace("d-flex", "d-none");
    }
  } catch (error) {
    console.error("Error fetching game details:", error);
    hero.classList.remove("d-none");
    loader.classList.replace("d-flex", "d-none");
  }
}

class Details {
  constructor(gameData) {
    this.id = gameData.id;
    this.title = gameData.title;
    this.description = gameData.description;
    this.shortDescription = gameData.short_description;
    this.thumbnail = gameData.thumbnail;
    this.genre = gameData.genre;
    this.platform = gameData.platform;
    this.releaseDate = gameData.release_date;
    this.website = gameData.website;
    this.status = gameData.status;
    this.url = gameData.game_url;
  }
}
