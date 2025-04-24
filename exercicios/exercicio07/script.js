function trocar() {
    const resultado = document.getElementById('texto');
    console.log(resultado);
    
    resultado.style.color = 'red';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCor").addEventListener("click");
});