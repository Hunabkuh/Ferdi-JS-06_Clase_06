// 2- RELLENAR TICKET DE CINE

// Tienes una imagen de ticket de entrada para el cine, vacío, y unos inputs para rellenar: se te pide el nombre, fecha y la butaca (fila y asiento). Y al darle botón 'enviar', que se muestren en la imagen del ticket de entrada las opciones elegidas por el usuario. Esto implica maquetar el ticket mediante divs y CSS (puedes usar también una imagen de fondo para el papel).





function entradas() {
    window.open("entradas.html");
    let nom_impreso = document.getElementById("nombre").value;
    document.getElementById("nombre-ticket").innerHTML = nom_impreso;
    let cine_impreso = document.getElementById("ciudad").value;
    document.getElementById("cine-ticket").innerHTML = cine_impreso;
}