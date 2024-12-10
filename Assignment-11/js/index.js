(function () {
  async function getWeather(city = "cairo") {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1545b6eeb3f34df4b9d10437240912&q=${city}&days=3`
      );

      if (response.ok) {
        const data = await response.json();
        updateWeatherData(data.forecast.forecastday, data.location.name);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  function updateWeatherData(forecastDays, cityName) {
    const cards = document.querySelectorAll(".weather-data .card");
    forecastDays.forEach((day, index) => {
      if (cards[index]) {
        const dayNameSpan = cards[index].querySelector(
          ".top-card span:first-child"
        );
        const dateSpan = cards[index].querySelector(
          ".top-card span:last-child"
        );
        const citySpan = cards[index].querySelector(".middle-card span");
        const weatherIcon = cards[index].querySelector(".middle-card img");
        const temperatureElement =
          cards[index].querySelector(".middle-card h2");
        const conditionParagraph = cards[index].querySelector(".middle-card p");
        const chanceOfRainSpan = cards[index].querySelector(
          ".related-info div:nth-child(1) span:last-child"
        );
        const windSpeedSpan = cards[index].querySelector(
          ".related-info div:nth-child(2) span:last-child"
        );
        const windDirectionSpan = cards[index].querySelector(
          ".related-info div:nth-child(3) span:last-child"
        );

        if (forecastDays && forecastDays.length > 0) {
          const dayData = forecastDays[index];

          if (dayNameSpan)
            dayNameSpan.textContent = new Date(dayData.date).toLocaleDateString(
              "en-US",
              { weekday: "long" }
            );
          if (dateSpan)
            dateSpan.textContent = new Date(dayData.date).toLocaleDateString(
              "en-US",
              {
                day: "numeric",
                month: "long",
              }
            );
          if (citySpan) citySpan.textContent = cityName;
          if (weatherIcon) {
            weatherIcon.src = dayData.day.condition.icon;
            weatherIcon.alt = dayData.day.condition.text;
          }
          if (temperatureElement)
            temperatureElement.innerHTML = `${dayData.day.avgtemp_c}<sup>o</sup>C`;
          if (conditionParagraph)
            conditionParagraph.textContent = dayData.day.condition.text;
          if (chanceOfRainSpan)
            chanceOfRainSpan.textContent =
              dayData.day.daily_chance_of_rain || "0%";
          if (windSpeedSpan)
            windSpeedSpan.textContent = dayData.day.maxwind_kph + "km/h";
          if (windDirectionSpan) {
            const windDirections = {
              N: "North",
              NE: "Northeast",
              E: "East",
              SE: "Southeast",
              S: "South",
              SW: "Southwest",
              W: "West",
              NW: "Northwest",
            };

            const windDirection = windDirections[dayData.day.wind_dir] || "N/A";
            windDirectionSpan.textContent = windDirection;
          }
        } else {
          console.error("Forecast data is missing or empty.");
        }
      }
    });
  }

  getWeather();

  const searchInput = document.querySelector("form input");
  searchInput.addEventListener("input", function () {
    const city = searchInput.value.trim();
    getWeather(city);
  });

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting/reloading
    });
  });
})();
