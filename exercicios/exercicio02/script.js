function trocar() {
    const resultado = document.getElementById('texto');
    resultado.textContent = `Novo texto.`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMensagem").addEventListener("click");
});