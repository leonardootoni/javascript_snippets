class Hangman {
  constructor(word, attempts) {
    this.word = word.toLowerCase().split("");
    this.attemptsToTry = attempts;
    this.guessed = new Array(word.length).fill("*");
  }

  getWordPuzzled() {
    let text = "";
    this.guessed.forEach(letter => (text += " " + letter));
    return text;
  }

  guessLetter(newLetter) {
    newLetter = newLetter.toLowerCase();
    let matched = false;
    this.word.forEach((letter, index) => {
      if (letter === newLetter) {
        this.guessed[index] = letter;
        matched = true;
      }
    });

    if (!matched) {
      if (!(this.attemptsToTry - 1)) {
        throw Error(Hangman.GAME_OVER);
      } else {
        this.attemptsToTry--;
      }
    }
  }

  wonGame() {
    const hasMoreToGuess = this.guessed.includes("*");
    if (!hasMoreToGuess) {
      return true;
    } else {
      return false;
    }
  }

  static get GAME_OVER() {
    return "Game Over. No more attempts to try.";
  }
}

// const Hangman = function(word, attempts) {
//   this.word = word.toLowerCase().split("");
//   this.attemptsToTry = attempts;
//   this.guessed = new Array(word.length).fill("*");
// };
// Hangman.prototype.GAME_OVER = "Game Over. No more attempts to try.";
// Hangman.prototype.getWordPuzzled = function() {
//   let text = "";
//   this.guessed.forEach(letter => (text += " " + letter));
//   return text;
// };
// Hangman.prototype.guessLetter = function(newLetter) {
//   newLetter = newLetter.toLowerCase();
//   let matched = false;
//   this.word.forEach((letter, index) => {
//     if (letter === newLetter) {
//       this.guessed[index] = letter;
//       matched = true;
//     }
//   });

//   if (!matched) {
//     if (!(this.attemptsToTry - 1)) {
//       throw Error(this.GAME_OVER);
//     } else {
//       this.attemptsToTry--;
//     }
//   }
// };

// Hangman.prototype.wonGame = function() {
//   const hasMoreToGuess = this.guessed.includes("*");
//   if (!hasMoreToGuess) {
//     return true;
//   } else {
//     return false;
//   }
// };
