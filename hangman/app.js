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
getPuzzle()
  .then(data => {
    const countryCode = "US";
    const countryList = data.filter(country => country.alpha2Code === countryCode);
    if (countryList.length < 1) {
      throw new Error("Country was not found.");
    } else {
      return countryList[0];
    }
  })
  .then(country => {
    console.log(country);
  })
  .catch(error => {
    console.log(error);
  });

getPuzzleByCountryCode("CA")
  .then(puzzle => {
    //resolve method from promise
    console.log("Retrived by fetch api");
    console.log(puzzle);
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
