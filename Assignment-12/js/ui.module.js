export let cartona = document.querySelector("#tab-content .row");
export const loader = document.querySelector(".loader-container");
export const hero = document.querySelector(".hero");

export function displayGames(games) {
  cartona.innerHTML = "";

  games.forEach((element) => {
    cartona.innerHTML += `
      <div class="col">
          <figure class="card">
            <img src="${element.thumbnail}" class="card-img-top" alt="${
      element.title
    }">
            <figcaption class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">${element.title}</h5>
                <span>Free</span>
              </div>
              <p class="card-text">${element.shortDescription
                .split(/,|\s|;|-/)
                .slice(0, 8)
                .join(" ")}</p>
            </figcaption>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <span class="badge badge-color">${element.genre}</span>
              <span class="badge badge-color">${
                element.platform.split(",")[0]
              }</span>
            </div>
          </figure>
        </div>
    `;
  });
}

export function displayDetails(obj) {
  const gameDetails = document.getElementById("game-details");
  const gameContainer = gameDetails.querySelector(".container");
  const closeBtn = document.getElementById("close");

  cartona.classList.add("d-none");
  gameDetails.classList.remove("d-none");

  gameContainer.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-white">Details Game</h2>
      <button class="close" id="close">&times;</button>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="mb-3">
          <img src="${obj.thumbnail}" class="w-100" alt="${obj.title}">
        </div>
      </div>
      <div class="col-lg-8">
        <div class="details-text">
          <h2>Title: ${obj.title}</h2>
          <div class="mb-2">
            <span>Category: </span>
            <span>${obj.genre}</span>
          </div>
          <div class="mb-2">
            <span>Platform: </span>
            <span>${obj.platform}</span>
          </div>
          <div class="mb-2">
            <span>Status: </span>
            <span>${obj.status}</span>
          </div>
          <p class="fs-s">${obj.description}</p>
          <a href="${obj.url}" target="_blank" class="btn btn-outline-light">Show Game</a>
        </div>
      </div>
    </div>
  `;

  const newCloseBtn = gameContainer.querySelector("#close");
  if (newCloseBtn) {
    newCloseBtn.removeEventListener("click", closeDetails);
    newCloseBtn.addEventListener("click", closeDetails);
  }

  function closeDetails() {
    gameDetails.classList.add("d-none");
    cartona.classList.remove("d-none");
  }
}
