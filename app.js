// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    resultado.textContent = "";

    if (nombre === "") {
        alert("Por favor, escriba un nombre válido");
        return;
    }

    listaAmigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo es: ${amigoSeleccionado}`;
}
