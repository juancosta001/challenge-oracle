let amigos = [];
function agregarAmigo(){
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    } else{
        amigos.push(document.getElementById("amigo").value);
        actualizarAmigo();
        document.getElementById("amigo").value = "";
    }
    
}
function actualizarAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo seleccionado es: " + amigoSeleccionado;
}