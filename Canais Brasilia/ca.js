const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        switch (this.textContent.trim()) {
            case 'LOJAS FISICAS':
                showAlert(
                    '- Loja Lago Sul: SHIS QI 21, Lago Sul;\n' +
                    '- Loja Taguatinga: QI 10, Lotes 25/38, Taguatinga. Próximo à Feira dos Goianos;\n' +
                    '- Loja Samambaia: QN 406, Samambaia Sul, Samambaia\n' +
                    '- Loja Paranoá: Quadra 03, Área Especial 07, Paranoá;\n' +
                    '- Loja Planaltina: Área Especial 08, Setor Norte, Planaltina;\n' +
                    '- Loja São Sebastião: Rua da Gameleira, Nº 260, Centro, São Sebastião.'
                );
                break;
            case 'CENTRAL DE RELACIONAMENTO COM O CLIENTE':
                showAlert(
                    'Telefone: 116 - 24 horas\n\n' +
                    'Para pessoas com deficiência auditiva ou de fala: 0800 701 01 55\n\n' +
                    'Para atendimento fora da área de concessão: 0800 061 0196'
                );
                break;
            case 'CANAIS DIGITAIS':
                showAlert(
                    'WhatsApp: (61) 3465-9318\n\n' +
                    'Site: www.neoenergia.com/web/brasilia\n\n' +
                    'Aplicativo: Disponível na Google Play e Apple Store para Android / IOS'
                );
                break;
            default:
                break;
        }
    });
});

function showAlert(message) {
    alert(message);
}
