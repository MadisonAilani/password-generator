// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created arrays with possible characters
var uppercaseArray = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Created a function for the questions to be asked
function questions() {
  var isValid = false;
  // Creates do/while loop for this function
  do {
  var length = prompt("How many characters would you like your password to be?");
  if ((length < 8) || (length > 128)) {
    alert("Your password must be between 8 and 128 characters.");
    return questions();
  } else {
    var uppercase = confirm("Would you like your password to contain uppercase letters?");
    var lowercase = confirm("Would you like your password to contain lowercase letters?");
    var special = confirm("Would you like your password to contain special characters?");
    var numbers = confirm("Would you like your password to contain numbers?");
  }

  // Variable for the responses to the prompts/confirms
  var responses = {
    length: length,
    uppercase: uppercase,
    lowercase: lowercase,
    special: special,
    numbers: numbers
  }

  // Checks to see if a password can be generated given the inputs
  if ((!uppercase) && (!lowercase) && (!special) && (!numbers)) {
    alert("Your password must meet one of the criteria.");
    return questions();
  } else {
    isValid = true;
  }
  } while (!isValid);
  return responses;
};

// Creates function for the password to be generated
function generatePassword() {
  var criteria = questions();
  var possibleCombo = [];
  var finalPassword = "";

  // These for loops add elements to a new array
  if (criteria.uppercase) {
    for (var i of uppercaseArray)
    possibleCombo.push(i);
  }
  if (criteria.lowercase) {
    for (var i of lowercaseArray)
    possibleCombo.push(i);
  }
  if (criteria.special) {
    for (var i of specialCharacters)
    possibleCombo.push(i);
  }
  if (criteria.numbers) {
    for (var i of numberArray)
    possibleCombo.push(i);
  }
  
  // Logs the total amount of possible characters in the password
  console.log(possibleCombo);

  // Randomly generates a password
  for (var i = 0; i < criteria.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);