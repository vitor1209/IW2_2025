function trocar() {
    const resultado = document.body;
    console.log(resultado);
    
    resultado.style.background = 'red';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCor").addEventListener("click");
});