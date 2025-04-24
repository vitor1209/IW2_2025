function trocar() {
    const resultado = document.getElementById('texto');
    let tamanhoAtual = parseInt(window.getComputedStyle(resultado).fontSize);
    let novoTamanho = tamanhoAtual + 2;
    
    resultado.style.fontSize = novoTamanho+'px';
};