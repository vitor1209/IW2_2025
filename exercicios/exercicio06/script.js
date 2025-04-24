function trocar() {
    const resultado = document.getElementById('txtNovo');
    console.log(resultado);
    
    resultado.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnAparecer").addEventListener("click");
});