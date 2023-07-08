let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      //   let wholeData = data[0];
      let capital = data[0].capital[0];
      let flag = data[0].flags.svg;
      let name = data[0].name.common;
      let continent = data[0].continents[0];
      let currency = Object.keys(data[0].currencies)[0];
      let currName = data[0].currencies[Object.keys(data[0].currencies)].name;
      let languages = Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ");
      let population = data[0].population;
      result.innerHTML = `
      <img src = "${flag}" class="flag-img">
      <h2>${name}</h2>
      <div class = "wrapper">
      <div class = "data-wrapper">
      <h4>Capital: </h4>
      <span>${capital}</span>
      </div>
      </div>
      <div class = "wrapper">
      <div class = "data-wrapper">
      <h4>Continent: </h4>
      <span>${continent}</span>
      </div>
      </div>
       <div class = "wrapper">
      <div class = "data-wrapper">
      <h4>Population: </h4>
      <span>${population}</span>
      </div>
      </div>
       <div class = "wrapper">
      <div class = "data-wrapper">
      <h4>Currency: </h4>
      <span>${currName} - ${currency}</span>
      </div>
      </div>
      <div class = "wrapper">
      <div class = "data-wrapper">
      <h4>Common Languages: </h4>
      <span>${languages}</span>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty !</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
