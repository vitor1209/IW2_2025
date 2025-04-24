function trocar() {
    const resultado = document.getElementById('texto');
    console.log(resultado);
    
    resultado.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnSumir").addEventListener("click");
});