function showMessage() {
  alert('Hello! Main Rudra hoon aur mobile se coding seekh raha hoon.');
}
function showMessage() {
  alert('Hello! Main Rudra hoon aur mobile se coding seekh raha hoon.');
}
function checkPassword() {
  let pass = document.getElementById("password").value;
  let result = document.getElementById("result");

  if (pass.length < 6) {
    result.innerHTML = "❌ Weak Password";
  } else if (pass.length < 10) {
    result.innerHTML = "⚠️ Medium Password";
  } else {
    result.innerHTML = "✅ Strong Password";
  }
}
function toggleTheme() {
  document.body.classList.toggle("light");
}
