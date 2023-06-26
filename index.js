function getWeather(event) {
    event.preventDefault(); // Prevents form submission from refreshing the page
    let d = new Date();
    let dateString = d.toDateString();
    let input = document.getElementById("search").value;
    let subContainer = document.querySelector("#sub-cont");
    let url = "https://goweather.herokuapp.com/weather/" + input;

    try {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Weather data not found");
          }
          return response.json();
        })
        .then((weather) => {
          let ihtml = "";
          ihtml += `
      <p id="city">${input.toUpperCase()}</p>
      <br />
      <p id="date">${dateString}</p>
      <br /><br />
      <p id="temp">${weather.temperature}</p>
      <p id="description">${weather.description}</p>
    `;
          subContainer.innerHTML = ihtml;
        })
        .catch((error) => {
          subContainer.innerHTML = "Not Found! Please try again...";
        });
    } catch (error) {
      subContainer.innerHTML = "Not Found! Please try again....";
    }
  }