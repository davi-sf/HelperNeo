function calculateMed() {
    const mediaAnual = parseInt(document.getElementById('mediaAnual').value, 10);
    const ultimoDiaLeitura = new Date(document.getElementById('ultimoDiaLeitura').value);
    const dataAtual = new Date(document.getElementById('dataAtual').value);
    const constanteMedidor = parseInt(document.getElementById('constanteMedidor').value, 10);
    const ultimaLeitura = parseInt(document.getElementById('ultimaLeitura').value, 10);

    const diferencaDias = Math.floor((dataAtual - ultimoDiaLeitura) / (1000 * 60 * 60 * 24));
    const resultado = ((mediaAnual / 30) * diferencaDias + constanteMedidor + ultimaLeitura) | 0;
    
    alert(`Leitura que deverá ser ultilizada: ${resultado}`);
}
