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

// Wait for the DOM to be fully loaded before executing the code inside this block
document.addEventListener("DOMContentLoaded", function () {
  // Function to prompt user for password options
  function getPasswordOptions() {
    var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

    // Validate the length input
    while (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
    }
    //prompts for the password criteria and sets a variable called for each criteria
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special characters ($@%&*, etc)?");
    
    
    
    // Validate that at least one character type is selected
    while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
      alert("Please select at least one character type.");
      includeLowercase = confirm("Include lowercase letters?");
      includeUppercase = confirm("Include uppercase letters?");
      includeNumbers = confirm("Include numbers?");
      includeSpecialChars = confirm("Include special characters ($@%&*, etc)?");
    }

    return {
      length: length,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeNumbers: includeNumbers,
      includeSpecialChars: includeSpecialChars,
    };
  };


 // Function to get a random element from an array
 function getRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword(options) {
  let characters = '';

  if (options.includeLowercase) characters += lowerCasedCharacters.join('');
  if (options.includeUppercase) characters += upperCasedCharacters.join('');
  if (options.includeNumbers) characters += numericCharacters.join('');
  if (options.includeSpecialChars) characters += specialCharacters.join('');

  let password = '';

  for (let i = 0; i < options.length; i++) {
    password += getRandom(characters);
  }

  return password;
}
for (let i = 0; i < options.length; i++) {
  password += getRandom(characters);
}

return password;
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
});

// Function to generate a password based on user options
