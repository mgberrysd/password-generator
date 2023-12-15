// initial psuedo code
// when pw button clicked -> prompt length 8 - 128
// make var based on input length
// if valid continue
// if not return
// confirm for special characters, numbers, uppercase, and lower case letters
// create password based on confirmed answers
// display pw

//  var needed
// pwlength
// special characters array, numbers array, letters array (should only need 1)
// make array based on selected properties
// for each element of password randomly select a class of property and 


// Assignment Code
var generateBtn = document.querySelector("#generate");

var sC = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialCharacters = sC.split("");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaU = alpha.toUpperCase();

var letters = alpha.split("");
var lettersUpper = alphaU.split("");

function generatePassword() {

  var included = [];

  var PW = [];

  var pwLength = prompt("Enter a password length between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength)
    if (confirm("Would you like special characters?")) {
      included.push(specialCharacters);
    }
    if (confirm("Would you like numbers?")) {
      included.push(numbers);
    }
    if (confirm("Would you like upper case letters?")) {
      included.push(lettersUpper);
    }
    if (confirm("Would you like lower case letters?")) {
      included.push(letters);
    }
    if (included.length === 0) {
      alert("Please select at least one password parameter")
      return
    }

    var flatIncluded = included.flat();

    for (i = 0; i < pwLength; i++) {
      var randomIndex =  Math.floor(Math.random() * flatIncluded.length);
      
      PW.push(flatIncluded[randomIndex]);
    }

    alert("Your secure password is " + PW.join(""))
    return PW.join("")
  }
  else {
    alert("Please enter a number between 8 and 128")
    return
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
