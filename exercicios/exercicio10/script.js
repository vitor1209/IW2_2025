function trocar() {
    const resultado = document.getElementById('texto');
    let VerAtual = window.getComputedStyle(resultado).display;

    if (VerAtual == 'block'){
        resultado.style.display = 'none';
    } else{
        resultado.style.display = 'block';
    }

};