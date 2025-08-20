// Handle Signup
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const storedUser = localStorage.getItem(email);
      if (!storedUser) {
        alert("User not found. Please signup.");
        return;
      }

      const user = JSON.parse(storedUser);
      if (user.password === password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Incorrect password.");
      }
    });
  }
});
