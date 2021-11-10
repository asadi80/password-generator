// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var symbols = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolsArray = symbols.split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
