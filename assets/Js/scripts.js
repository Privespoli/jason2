
const colorEstado = { r: 255, g: 255, b: 255 };

// Array con las referencias a los 3 botones
const misBotones = [
  document.getElementById("btn-red"),
  document.getElementById("btn-green"),
  document.getElementById("btn-blue")
];

// --- Botón Verde 
misBotones[1].onclick = () => {
  colorEstado.g = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";
  document.getElementById("color-text").textContent =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";
};

// --- Botón Azul 
misBotones[2].onclick = () => {
  colorEstado.b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor =
    "rgb(" + colorEstado.r + "," + colorEstado.g + "," + colorEstado.b + ")";
  document.getElementById("color-text").textContent =
    "rgb(" + colorEstado.r + ", " + colorEstado.g + ", " + colorEstado.b + ")";
};