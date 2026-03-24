// 1. El Guardián del Estado (JSON)
const colorEstado = {
    r: 255,
    g: 255,
    b: 255
};

// 2. Array con las referencias del DOM
const misBotones = [
    document.getElementById("btn-red"),
    document.getElementById("btn-green"),
    document.getElementById("btn-blue")
];

// 3. Referencia al texto para actualizarlo después
const textoColor = document.getElementById("color-text");

// 4. Lógica para el Botón Rojo (Índice 0 del array)
misBotones[0].onclick = () => {
    // Generar número aleatorio y asignar a la propiedad 'r'
    colorEstado.r = Math.floor(Math.random() * 256);
    
    // Crear el string de color actualizado
    const nuevoColor = `rgb(${colorEstado.r}, ${colorEstado.g}, ${colorEstado.b})`;
    
    // Actualizar el estilo del body
    document.body.style.backgroundColor = nuevoColor;
    
    // Actualizar el texto del span
    textoColor.innerText = nuevoColor;
};