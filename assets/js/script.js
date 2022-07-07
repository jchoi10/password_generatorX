// Assignment code here
// Array of characters to choose from
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCase = ["@","%","+","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
var numberCase = ["1","2","3","4","5","6","7","8","9"];

// compile all array
//const allPull = lowerCase.concat(upperCase, specialCase, numberCase);
//choose random character from compiled array
//var randomSingleChar = allPull[Math.floor(Math.random()*allPull.length)];

// checking if the compile works
//console.log(randomSingleChar);

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
  
  //prompts for configuration
  if (passwordVal) {
    var withLowerchar = window.confirm("Click OK if you want lower case characters.");
    var withUpperchar = window.confirm("Click OK if you want upper case characters.");
    var withNumchar = window.confirm("Click OK if you want numeric characters.");
    var withSpecialchar = window.confirm("Click OK if you wnat special cahracters.");
    if (withLowerchar===false && withUpperchar===false && withNumchar===false && withSpecialchar===false){
      window.alert('You should choose at least one category for the password to generate!')
      return generatePassword()
    }
  };

  //final compiled array of selected category
  var finalincPassword = [];
  //one random character from each selected category
  var selectedChar = [];

  //select random characters in each category
  if (withLowerchar) {
    selectedChar.push(Math.floor(Math.random()*lowerCase.length))
    finalincPassword = finalincPassword.concat(withLowerchar)
  }

  if (withUpperchar) {
    selectedChar.push(Math.floor(Math.random()*upperCase.length))
    finalincPassword = finalincPassword.concat(withUpperchar)
  }

  if (withNumchar) {
    selectedChar.push(Math.floor(Math.random()*numberCase.length))
    finalincPassword = finalincPassword.concat(withNumchar)
  }

  if (withSpecialchar) {
    selectedChar.push(Math.floor(Math.random)*specialCase.length)
    finalincPassword = finalincPassword.concat(withSpecialchar)
  }


};



//random select base code
//var randLowerchar = lowerCase[Math.floor(Math.random()*lowerCase.length)]
//console.log(randLowerchar)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);