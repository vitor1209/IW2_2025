function saudacao() {
    alert("Olá, bem-vindo á aula");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});