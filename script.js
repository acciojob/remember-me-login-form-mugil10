const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

function showExistingUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existing.style.display = "block";
  } else {
    existing.style.display = "none";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  showExistingUser();
});

existing.addEventListener("click", function() {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert("Logged in as " + savedUsername);
  }
});

showExistingUser();