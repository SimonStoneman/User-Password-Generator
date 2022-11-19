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

var arrayArrays = [lowerCasedCharacters,upperCasedCharacters,numericCharacters,specialCharacters];
var lowerCharsIndx = 0;
var upperCharsIndx = 1;
var numCharsIndx = 2;
var specialCharsIndx = 3;

// Function to prompt user for password options
function getPasswordOptions() {

  let lowerChars = false;
  let upperChars = false;
  let numChars = false;
  let specialChars = false;
  let pwdArray = [];
  let pwdLength = 0;

  //prompt for password length (between 10 - 64 chars)
  pwdLength = prompt("Enter the required password length between between 10 and 64:");

  //check length of user password length requirement is within boundaries
  if (pwdLength == null){
    
      alert('Please enter a valid value');
      
      generatePassword();

  } else if (pwdLength < 10 || pwdLength > 64) {

      alert('Please enter a number between 10 and 64');
      generatePassword();

  } else {
      // confirm for wanting lowercase
      lowerChars = confirm('Do you want the password to contain lowercase characters?');
      
      if(lowerChars){
        pwdArray.push(arrayArrays[lowerCharsIndx]);
      }

      // confirm for wanting uppercase
      upperChars = confirm('Do you want the password to contain uppercase characters?');
      
      if(upperChars){
        pwdArray.push(arrayArrays[upperCharsIndx]);
      }

      // confirm for wanting numeric
      numChars = confirm('Do you want the password to contain numeric characters?');
      
      if(numChars){
        pwdArray.push(arrayArrays[numCharsIndx]);
      }

      // confirm for wanting special chars
      specialChars = confirm('Do you want the password to contain special characters?');
      
      if(specialChars){
        pwdArray.push(arrayArrays[specialCharsIndx]);
      }
  }

  return {
    selArray: pwdArray, 
    passwlength: pwdLength
  };

}

// Function for getting a random element from an array
function getRandom(arr) {

  var randomArrayIndex = 0;
  var randomArrayElement = '';

  randomArrayIndex = Math.floor(Math.random() * arr.length);
  console.log('Random Array Index is: ' + randomArrayIndex);
  randomArrayElement = arr [randomArrayIndex];
  console.log('Random Array Element is: ' + randomArrayElement);

  return randomArrayElement;

}

// Function to generate password with user input
function generatePassword() {

let genPassword = '';
//Retrieve getPasswordOptions function outputs
let gPOOutput = getPasswordOptions();

let gpoArray = gPOOutput.selArray;
let gpoPwdLength = gPOOutput.passwlength;

//console.log('User Selected Array Content is: ' + gpoArray);

// console.log('User Selected Password Length is: ' + gpoPwdLength);

for (let i = 0; i <= gpoPwdLength; ++i){
  let gpoArrayRandomArrayIndex = Math.floor(Math.random() * gpoArray.length);
  genPassword += getRandom(gpoArray[gpoArrayRandomArrayIndex]);
};

//combine user selected array types in to one array
//iterate through combined array for length of pwd 

//console.log('Generated Password is: ' + genPassword);

return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

 // console.log('Password value from generatePassword() is: ' + password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);