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

var letters = alpha.split("");
// var included = [];

// included.push(specialCharacters);
// included.push(numbers);
// included.push(letters);
// var flatIncluded = included.flat();
// console.log(flatIncluded.length)
// var randomIndex =  Math.floor(Math.random() * flatIncluded.length);
// console.log(randomIndex)



function generatePassword() {

  var included = [];

  var PW = [];
  console.log(PW)

  var pwLength = prompt("Enter a password length between 8 and 128");

  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength)
    if (confirm("Would you like special characters?")) {
      included.push(specialCharacters);
      console.log(included)
    }
    if (confirm("Would you like numbers?")) {
      included.push(numbers);
      console.log(included)

    }
    // if (confirm("Would you like upper case letters?")) {
    //   included.push(letters.toUpperCase);
    // }
    if (confirm("Would you like lower case letters?")) {
      included.push(letters);
      console.log(included)

    }
    // if (included.length === 0) {
    //   return
    // }
    var flatIncluded = included.flat();
    console.log(flatIncluded)
    for (i = 0; i < pwLength; i++) {
      var randomIndex =  Math.floor(Math.random() * flatIncluded.length);
      
      PW.push(flatIncluded[randomIndex]);
      console.log(PW);
      console.log(i);
    }


    alert("Your secure password is " + PW)
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
