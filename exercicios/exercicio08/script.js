function msg() {
    const resultado = document.getElementById('nome');
    var valor = resultado.value;

    alert("Numero de caractere é: "+ valor.length);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMsg").addEventListener("click");
});