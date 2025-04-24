function mensagem() {
    alert("Olá, JS e Legal!!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMensagem").addEventListener("click", saudacao);
});