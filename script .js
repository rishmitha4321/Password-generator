function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/";

  let characters = "";
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = "";
  if (characters.length === 0) {
    document.getElementById("output").textContent = "Please select at least one option!";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("output").textContent = password;
}
