// Mensaje de bienvenida al entrar
window.addEventListener("load", () => {
  alert("💖 Bienvenida a Arianna Store 💖\nTu estilo, nuestra inspiración.");
});

// Efecto al presionar un botón
const botones = document.querySelectorAll("button");
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(1.1)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});