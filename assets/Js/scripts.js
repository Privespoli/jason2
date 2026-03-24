// BOTÓN VERDE 
misBotones[1].onclick = () => {
    // Generar número aleatorio para 'g'
    colorEstado.g = Math.floor(Math.random() * 256);

    // Crear color 
    const nuevoColor = `rgb(${colorEstado.r}, ${colorEstado.g}, ${colorEstado.b})`;

    // fondo
    document.body.style.backgroundColor = nuevoColor;

    // texto
    textoColor.innerText = nuevoColor;
};


// BOTÓN AZUL 
misBotones[2].onclick = () => {
    // Generar número aleatorio para 'b'
    colorEstado.b = Math.floor(Math.random() * 256);

    // Crear color actualizado
    const nuevoColor = `rgb(${colorEstado.r}, ${colorEstado.g}, ${colorEstado.b})`;

    // fondo
    document.body.style.backgroundColor = nuevoColor;

    // texto
    textoColor.innerText = nuevoColor;
};