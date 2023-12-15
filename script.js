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

var letters = alpha.split("")

var included = [];

included.push(letters)
console.log(letters)
included.push(numbers)
included.flat()
console.log(included.length)

var password = [];


function generatePassword() {

  

  var pwLength = prompt("Enter a password length between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128) {
    if (confirm("Would you like special characters?")) {
      included.shift(specialCharacters)
    }
    if (confirm("Would you like numbers?")) {
      included.shift(numbers)
    }
    if (confirm("Would you like upper case letters?")) {
      included.shift(letters.toUpperCase)
    }
    if (confirm("Would you like lower case letters?")) {
      included.shift(letters)
    }
    // if (included.length === 0) {
    //   return
    // }
    for (i = 0; i < pwLength.length; i++) {
      var randomIndex =  Math.floor(Math.random * included.length);
      password[i] = included[randomIndex];
    }
    console.log(password)

    alert("Your secure password is " + password)
  }
  else {
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
