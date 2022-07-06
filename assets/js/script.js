// Assignment code here
// Array of characters to choose from
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCase = ["@","%","+","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
var numberCase = ["1","2","3","4","5","6","7","8","9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Validate character number to be from 8 to 128
function confirmNum (userCharNum) {
  if (isNaN(userCharNum)){
    window.alert('Please enter a valid number.')
    return generatePassword()
  } else if (parseInt(userCharNum) < 8){
    window.alert('Password should be at least more than 8 characters.')
    return generatePassword()
  } else if (parseInt(userCharNum)>=128){
    window.alert('Password should be less than 128 characters.')
    return generatePassword()
  }
  return true;
}

function generatePassword() {
  var userCharNum = prompt (
    "How many characters do you need for your password?"
  )
  var passwordVal = confirmNum(userCharNum);
  
  if (passwordVal) {
    var withLowerchar = window.confirm("Click OK if you want lower case characters.");
    var withUpperchar = window.confirm("Click OK if you want upper case characters.");
    var withNumchar = window.confirm("Click OK if you want numeric characters.")
    var withSpecialchar = window.confirm("Click OK if you wnat special cahracters.")
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);