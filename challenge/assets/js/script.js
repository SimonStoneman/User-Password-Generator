// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var lowerChars = '';
  var upperChars = '';
  var numChars = '';
  var specialChars = '';
  var pwdLength = 0;

  //prompt for password length (between 10 - 64 chars)
  pwdLength = prompt("Enter the required password length between between 10 - 64:");
  // confirm for wanting lowercase
  lowerChars = confirm('Do you want the password to contain lowercase characters?');
  // confirm for wanting uppercase
  upperChars = confirm('Do you want the password to contain uppercase characters?');
  // confirm for wanting numeric
  numChars = confirm('Do you want the password to contain numeric characters?');
  // confirm for wanting special chars
  specialChars = confirm('Do you want the password to contain special characters?');
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomArrayIndex = '';
  var randomArrayElement = '';

  randomArrayIndex = math.floor(math.random() * arr.length);
  randomArrayElement = arr [randomArrayIndex];

  return randomArrayElement;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);