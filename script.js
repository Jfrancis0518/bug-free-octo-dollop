// Assignment code here
window.alert("Welcome to the random password generator")
 //window.prompt("How many characters would you like your password to have?");

 const aNumber = Number(window.prompt("How many characters would you like your password to have? (Type a number)" , ""));

 (window.confirm("Would you like to add numbers?"))

(window.confirm("would you like to add special characters?"))

 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomNumber = Math.floor(Math.random() * chars.length);
  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//math
//Math.floor() returns the largest integer less than or equal to x
//Math.max() returns the largest of zero or more numnbers
//Math.min() returns the smallest of zero or more numbers
//Math.random() returns a pseudo-random number between 0 and 1

//Window
// window alert() instructs the browser to display a dialog w/ optional message
//window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.


//prompt > alert > confirm