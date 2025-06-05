function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_+=<>?";

  let allChars = "";
  if (includeUpper) allChars += upperCase;
  if (includeLower) allChars += lowerCase;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  passwordField.setSelectionRange(0, 999); // for mobile
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
