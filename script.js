// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

alert('Click "Generate Password" to start!');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("How many characters do you want your password to contain?");
  if (passwordLength < 8) {
    alert("Your password must contain at least 8 characters.");
  } else if (passwordLength > 128) {
    alert("Your password character count cannot exceed 128 characters.");
  } else {
    var lowercase = alert("Would you like your password to contain lowercase letters?");
  }

  if (lowercase === true) {
    var uppercase = alert("Would you like your password to contain uppercase letters?");
  } else {
    var uppercase = alert("Would you like your password to contain uppercase letters?");
  }

  if (uppercase === true) {
    var number = alert("Would you like your password to contain numbers?");
  } else {
    var number = alert("Would you like your password to contain numbers?");
  }

  if (number === true) {
    var special = alert("Would you like your password to contain special characters?");
  } else {
    var special = alert("Would you like your password to contain special characters?");
  }

  if (special === true) {

  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);