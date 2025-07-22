document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  localStorage.setItem(email, JSON.stringify({ name, password }));
  alert("Registered! Now login.");
  window.location.href = "login.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    alert(`Welcome ${user.name}!`);
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
});