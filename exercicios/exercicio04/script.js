function msg() {
    const resultado = document.getElementById('nome');
    var valor = resultado.value;

    alert("Bom Dia "+ valor);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMsg").addEventListener("click");
});