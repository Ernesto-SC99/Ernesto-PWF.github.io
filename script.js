const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginMessage = document.getElementById("login-message");
const registerMessage = document.getElementById("register-message");

// Alternar entre Login y Registro
loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

// Usuarios Simulados (localStorage)
const users = JSON.parse(localStorage.getItem("users")) || [];

// Manejar Registro
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    registerMessage.textContent = "Las contraseñas no coinciden.";
    return;
  }

  const userExists = users.find((user) => user.username === username || user.email === email);
  if (userExists) {
    registerMessage.textContent = "Usuario ya existente.";
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  registerMessage.textContent = "¡Usuario registrado exitosamente!";
});

// Manejar Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find((user) => user.username === username && user.password === password);
  if (!user) {
    loginMessage.textContent = "Usuario o contraseña inválidos.";
    return;
  }

  // Redirigir después de un inicio de sesión exitoso
  window.location.href = "index3.html";
});