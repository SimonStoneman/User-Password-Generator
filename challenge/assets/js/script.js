// Start of Global Data
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
// End of Global Data

// Start of Global Vars
var arrayOfAllArrays = [lowerCasedCharacters,upperCasedCharacters,numericCharacters,specialCharacters];
var lowerCharsIndx = 0;
var upperCharsIndx = 1;
var numCharsIndx = 2;
var specialCharsIndx = 3;
// End of Global Vars

// Function to prompt user for password options
function getPasswordOptions() {

  let lowerChars = false;
  let upperChars = false;
  let numChars = false;
  let specialChars = false;
  let pwdArray = [];
  let pwdLength = 0;
  let selectionCnt = 0;

  //prompt for password length (between 10 - 64 chars)
  pwdLength = prompt("Enter the required password length between between 10 and 64:");

  //check length of user password length requirement is within boundaries
  if (isNaN(pwdLength)){

    // if value entered is not a number, then alert and re-run generatePassword() func

      alert('Please enter a valid value');

      generatePassword();

  } else if (pwdLength < 10 || pwdLength > 64) {

      // if number entered outside of range, then alert and re-run generatePassword() func

      alert('Please enter a number between 10 and 64');

      generatePassword();

  } else {
      // confirm for wanting lowercase
      lowerChars = confirm('Do you want the password to contain lowercase characters?');
      
      if(lowerChars){
        //Select the nested lowerChars array data and add to custom pwdArray
        pwdArray.push(arrayOfAllArrays[lowerCharsIndx]);
        selectionCnt ++;
      }

      // confirm for wanting uppercase
      upperChars = confirm('Do you want the password to contain uppercase characters?');
      
      if(upperChars){
        //Select the nested upperChars array data and add to custom pwdArray
        pwdArray.push(arrayOfAllArrays[upperCharsIndx]);
        selectionCnt ++;
      }

      // confirm for wanting numeric
      numChars = confirm('Do you want the password to contain numeric characters?');
      
      if(numChars){
        //Select the nested numChars array data and add to custom pwdArray
        pwdArray.push(arrayOfAllArrays[numCharsIndx]);
        selectionCnt ++;
      }

      // confirm for wanting special chars
      specialChars = confirm('Do you want the password to contain special characters?');
      
      if(specialChars){
        //Select the nested specialChars array data and add to custom pwdArray
        pwdArray.push(arrayOfAllArrays[specialCharsIndx]);
        selectionCnt ++;
      }
 
      //One last selection if the selection count equals zero, then re-run generatePassword() func.
      if (selectionCnt < 1){
        alert('Please selected an option');

        generatePassword();
      }
      
  }

  // return the custom concat array based on the users selections and the required password length as an object
  return {
    selArray: pwdArray, 
    selPasswLength: pwdLength
  };

}

// Function for getting a random element from an array
function getRandom(arr) {

  let randomArrayIndex = 0;
  let randomArrayElement = '';

  //console.log("Array being processed is :" + arr);

  randomArrayIndex = Math.floor(Math.random() * arr.length);
  //console.log('Random Array Index is: ' + randomArrayIndex);
  randomArrayElement = arr [randomArrayIndex];
  //console.log('Random Array Element is: ' + randomArrayElement);

  return randomArrayElement;

}

// Function to generate password with user input
function generatePassword() {

  let genPassword = '';
  let gpoFuncOutput = {};
  let gpoArray = '';
  let gpoPwdLength = '';


  //Retrieve getPasswordOptsions function outputs (an object)
  gpoFuncOutput = getPasswordOptions();

  //Set gpoArray to value of gpoFuncOutput (object) selArray property
  gpoArray = gpoFuncOutput.selArray;

  //Set gpoArray to value of gpoFuncOutput (object) passwLength property
  gpoPwdLength = gpoFuncOutput.selPasswLength;

  //console.log('User Selected Array Content is: ' + gpoArray);

  //console.log('User Selected Password Length is: ' + gpoPwdLength);

  for (let i = 0; i <= gpoPwdLength; ++i){

    //console.log('User Gen Array It: ' + i);

    // Get a random index number based on the four combined primary arrays e.g. lowercase, uppercase.... total of 4 - 1 (0 index)
    let gpoArrayRandomArrayIndex = Math.floor(Math.random() * gpoArray.length);

    // Concate each random password char from the randomly selected array type (of 4) and its vals
    genPassword += getRandom(gpoArray[gpoArrayRandomArrayIndex]);
  };

  //console.log('Generated Password is: ' + genPassword);

  // Return the concate password string for presentation
  return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  // Create variable 'password' and set value to what is returned from executing generatePassword() func 
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

 // console.log('Password value from generatePassword() is: ' + password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);