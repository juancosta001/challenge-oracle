let amigos = [];
function agregarAmigo(){
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    } else{
        amigos.push(document.getElementById("amigo").value);
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += amigos[i];
            if (i < amigos.length - 1) {
            lista.innerHTML += ", ";
            }
        }
        document.getElementById("amigo").value = "";
    }
    
}