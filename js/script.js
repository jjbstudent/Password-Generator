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
  }

// Function to get a random element from an array
function getRandom(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined;
  }
  // Generate a random index within the array's length
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Return the element at the random index
  return arr[randomIndex];
}

function generatePassword(options) {
  // Initialize an empty string to store characters
  let characters = '';

  // Concatenate character sets based on user options
  if (options.includeLowercase) characters += lowerCasedCharacters.join('');
  if (options.includeUppercase) characters += upperCasedCharacters.join('');
  if (options.includeNumbers) characters += numericCharacters.join('');
  if (options.includeSpecialChars) characters += specialCharacters.join('');

  // Initialize an empty string for the password
  let password = '';

  // Generate the password by randomly selecting characters from the combined set
  for (let i = 0; i < options.length; i++) {
    password += getRandom(characters);
  }

  // Return the generated password
  return password;
}

// Event listener for the "Generate Password" button
var generateBtn = document.querySelector('#generate');
var passwordHeader = document.querySelector('.card-header h2');

// Write password to the #password input and update header
function writePassword() {
  // Get user options for password generation
  var options = getPasswordOptions();
  // Check if options are provided
  if (options) {
    // Generate a password based on user options
    var password = generatePassword(options);
    // Get the password text area element
    var passwordText = document.querySelector('#password');
    // Set the generated password as the value of the text area
    passwordText.value = password;
    // Change the button text to indicate that the password is generated
    generateBtn.innerText = "Password Generated";
    // Disable the button to prevent further clicks
    generateBtn.disabled = true;
    // Change the header text to indicate the new password
    passwordHeader.innerText = "Your New Password";
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
});

