//callback is a function reference
const url = "http://restcountries.eu/rest/v2/all";
const country2Code = "US";

const getPuzzle = () => {
  return fetch("http://restcountries.eu/rest/v2/all", {}).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Impossible to process the request");
    }
  });
};
// new Promise((resolve, reject) => {
//   const url = "http://restcountries.eu/rest/v2/all";
//   const country2Code = "US";
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", e => {
//     const response = e.target;
//     if (response.readyState === 4 && response.status === 200) {
//       const jsonData = JSON.parse(response.responseText);
//       const countryData = filterByCountryCode(jsonData, country2Code);

//       //dispatch the promise resolve method
//       resolve(countryData);
//     } else if (response.readyState === 4) {
//       reject(response.responseText);
//     }
//   });
//   request.open("GET", url, true); //true sets the method to asynchronous
//   request.send();
// });

const filterByCountryCode = (jsonData, country2Code) => {
  const countryList = jsonData.filter(country => country.alpha2Code === country2Code);
  if (countryList.length !== 1) {
    throw new Error("Country not found.");
  }

  return countryList[0];
};

//Fetch a country using a countryCode provided
const getPuzzleByCountryCode = countryCode => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Impossible to complete the request");
    }
  });
};
