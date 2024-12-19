import { displayDetails, loader } from "./ui.module.js";
import { hero } from "./ui.module.js";

export async function getDetails(id) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d7abf8732emsh824336a1d883953p15fc8djsn3f73a4675ade", // API key
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com", // API host
    },
  };

  // Show loader while waiting for the data
  hero.classList.add("d-none");
  loader.classList.replace("d-none", "d-flex");

  try {
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();

    if (response && response.id) {
      const gameDetails = new Details(response);
      // Hide loader after fetching the data
      hero.classList.remove("d-none");
      loader.classList.replace("d-flex", "d-none");

      // Display game details
      displayDetails(gameDetails);
      console.log(gameDetails);
    } else {
      // Handle case where response does not contain valid game details
      console.error("Game details not found.");
      hero.classList.remove("d-none");
      loader.classList.replace("d-flex", "d-none");
    }
  } catch (error) {
    // Handle any errors during fetch
    console.error("Error fetching game details:", error);
    hero.classList.remove("d-none");
    loader.classList.replace("d-flex", "d-none"); // Hide loader in case of error
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
