const getPuzzle = async countryCode => {
  const response = await fetch("http://restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.filter(country => country.alpha2Code === countryCode)[0];
  } else {
    throw new Error("Impossible to process the request");
  }
};

//Fetch a country using a countryCode provided using fetch
const getPuzzleByCountryCodeOld = countryCode => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Impossible to complete the request");
    }
  });
};

//Fetch a country using a countryCode provided using async / await
const getPuzzleByCountryCode = async countryCode => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  if (response.status === 200) {
    const promise = await response.json();
    return promise;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

//Fetch the user location based on the user IP address
const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=c176417f4ef7c4");
  if (response.status === 200) {
    return response.json(); //It returns a promise
  } else {
    throw new Error("Impossible to get data");
  }
};

// const getCurrentCountry = async () => {
//   const location = await getLocation();
//   return getPuzzleByCountryCode(location.country);
// };
