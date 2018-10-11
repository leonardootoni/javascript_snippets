//Primitive values: string, number, boolean, null, undefined

//Object myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunction --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
let hang1;
const formWord = document.getElementById("formWordToGuess");
const formLetter = document.getElementById("formLetter");
const formRemainingAttempts = document.getElementById("formRemainingAttempts");
const submitBtn = document.getElementById("submitBtn");

const startPage = countryName => {
  hang1 = new Hangman(countryName, 4);
  formLetter.focus();
  formWord.textContent = hang1.getWordPuzzled();
  formRemainingAttempts.value = hang1.attemptsToTry;
};

//Messages
const MSG_VALIDATION_INPUT_ERROR = "Input a valid string character.";

submitBtn.addEventListener("click", () => {
  if (isValidInput(formLetter.value)) {
    processGuess(formLetter.value);
    if (hang1.wonGame()) {
      alert("You win!!!, the game is closed. Reload the page to play again.");
      submitBtn.setAttribute("disabled", "");
    }
  }

  formLetter.value = "";
  formLetter.focus();
});

const processGuess = letter => {
  try {
    hang1.guessLetter(letter);
    formWord.textContent = hang1.getWordPuzzled();
    formRemainingAttempts.value = hang1.attemptsToTry;
  } catch (e) {
    document.getElementById("gameover").textContent = "GAME OVER!!!";
    console.log(e);
    alert(e.message);
  }
};

const isValidInput = letter => {
  if (!letter) {
    alert(MSG_VALIDATION_INPUT_ERROR);
    return false;
  } else {
    return true;
  }
};

//making an HTTP Request
// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     console.log(data);
//   } else if (e.target.readyState === 4) {
//     console.log("And error has taken place");
//   }
// });
// request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
// request.send();

//Requesting country information
getPuzzle("BR")
  .then(country => {
    console.log(country);
  })
  .catch(error => {
    console.log(error);
  });

getPuzzleByCountryCode("CA")
  .then(country => {
    //resolve method from promise
    console.log("Retrived by fetch api using async / wait:");
    console.log(country);
  })
  .catch(err => {
    console.log(err);
  });

// const func = callback => {
//   callback("hahaha", 1);
// };

// func((response, num) => {
//   console.log(response + num);
// });

//>>>Boiler plate to use the fetch API
// fetch("http://puzzle.mead.io/puzzle?wordCount=3", {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to fetch puzzle");
//     }
//   })
//   .then(data => {
//     console.log("using fetch api... [" + data.puzzle + "]");
//   })
//   .catch(error => {
//     console.log(error);
//   });

// getLocation()
//   .then(location => {
//     console.log(location);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// getLocation()
//   .then(data => {
//     //the promise was solved previously, so the response data is available to print
//     console.log(
//       `Data recovered using fetch API" [city: ${data.city} region: ${data.region} country: ${
//         data.country
//       }]`
//     );
//     //it is going to invoke the function to get country details by code
//     //It's using promise chaining
//     return getPuzzleByCountryCode(data.country);
//   })
//   .then(country => {
//     console.log(`The country native name is: ${country.nativeName}`);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// getCurrentCountry()
//   .then(country => {
//     console.log(
//       `Data recovered using fetch API" [code: ${country.alpha2Code} capital: ${
//         country.capital
//       } country: ${country.name}]`
//     );
//   })
//   .catch(error => {
//     console.log(error);
//   });
