// Assignment code here

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
  '.',
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerLetters = [
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
  'z',
];

// Array of uppercase characters to be included in password
var upperLetters = [
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
  'Z',
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function writePassword() {
  var finalChar = [];
  var possibleChar = [];
  var pwd = [];
  const aNumber = parseInt(window.prompt("How many characters would you like your password to have? (Type a number"));

  if(aNumber < 8 || aNumber > 128)
  {
    alert("Please select a password length between 8 and 128 characters");
    return null;
  }

  if(Number.isNaN(aNumber)) {
    alert("Please enter a valid number");
    return null;
  }


 const numConfirm = window.confirm("Would you like to add numbers?");

const specialConfirm = window.confirm("would you like to add special characters?");

const lowerConfirm = window.confirm("Would you like to add lower case letters?");

const upperConfirm = window.confirm("Would you like to add upper case letters?");

if(numConfirm === false && specialConfirm === false && lowerConfirm === false && upperConfirm === fasle)
{
  alert("No");
  return null;
}

if(numConfirm)
{
  possibleChar = possibleChar.concat(numbers);
  console.log("Possible Char Arr: ", possibleChar);
  finalChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
  console.log("Final Char Arr:", finalChar);
}

if(specialConfirm)
{
  possibleChar = possibleChar.concat(specialCharacters);
  console.log("Possible Char Arr: ", possibleChar);
  finalChar.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  console.log("Final Char Arr:", finalChar);

}

if(lowerConfirm)
{
  possibleChar = possibleChar.concat(numbers);
  console.log("Possible Char Arr: ", possibleChar);
  finalChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
  console.log("Final Char Arr:", finalChar);
}

if(upperConfirm)
{
  possibleChar = possibleChar.concat(specialCharacters);
  console.log("Possible Char Arr: ", possibleChar);
  finalChar.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  console.log("Final Char Arr:", finalChar);
}

if(numConfirm === true && specialConfirm === true && lowerConfirm === true && upperConfirm === true)
{
  alert("Please copy your password");
  //return randomPasswordGenerated;
  //return null;
}

}

function generatePassword() {

let finalResult = [];

let userOption = getPasswordOptions();

  let getPass = [];

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//return generatePassword;


 //finalResult = finalChar.join



//math: tryig to figure out which code it the correct one to use 
//Math.floor() returns the largest integer less than or equal to x
//Math.max() returns the largest of zero or more numnbers
//Math.min() returns the smallest of zero or more numbers
//Math.random() returns a pseudo-random number between 0 and 1

//Window
// window alert() instructs the browser to display a dialog w/ optional message
//window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.


//prompt > alert > confirm