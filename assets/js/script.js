// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var symbols = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolsArray = symbols.split("");

var allCharsArry = [];
var password = ""; 
  
var generatePassword =function(){
  var allCharsArry = [];
  var password = ""; 
  
  var TotLength = prompt("How many characters would you like your password to be? Choose betwhwn 8 up to 128");
  if(!TotLength){
    alert("This needs a value\nPlease start over.");
    
  }
  else if(TotLength <8 || TotLength > 128){
      alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
      

    }
    else{
      if(confirm("Would you like your password to contain upper case letters?")){
          Array.prototype.push.apply(allCharsArry, upperCaseArray);
      }

      if(confirm("Would you like your password to contain lower case letters?")){
          Array.prototype.push.apply(allCharsArry, lowerCaseArray);
      }

      if(confirm("Would you like your password to contain numbers?")){
          Array.prototype.push.apply(allCharsArry, numbersArray);
      }

      if(confirm("Would you like your password to contain symbols?")){
          Array.prototype.push.apply(allCharsArry, symbolsArray);
      }

      if(allCharsArry.length===0){
          alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
      }
      else{
        for(var i=0; i<TotLength; i++){
            var random = Math.floor(Math.random()*allCharsArry.length);
            password += allCharsArry[random];
        }
      }

    }
  return password;
}

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
