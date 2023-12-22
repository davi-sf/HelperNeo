document.getElementById('gerarTexto').addEventListener('click', function() {
  const nome = document.getElementById('nomeCliente').value;
  const telefone = document.getElementById('telefoneCliente').value;
  const codigo = document.getElementById('codigoCliente').value;
  const opcao = document.getElementById('opcao').value;
  let texto = '';

  switch (opcao) {
    case 'ligamento':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou o ligamento de sua UC.`;
      break;
    case 'notLigamento':
      texto = `Sr(Sra) ${nome}, de telefone ${telefone}, solicitou uma ligação nova, mas não possui vínculo com a empresa e, portanto, a solicitação não pôde ser concluída.`;
      break;  
    case 'desligamento':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou o desligamento definitivo de sua UC.`;
      break;
    case 'TT':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou a troca de titularidade e esta foi realizada.`;
      break;
    case 'LuzLocal':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, entrou em contato relatando falta de luz em sua residência. Foi aberta uma solicitação.`;
      break;
    case 'LuzGeral':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, relatou falta de luz geral. Foi aberta uma solicitação.`;
      break;
    case 'Religacao':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou a religação em sua residência. Não possui débitos em aberto.`;
      break;
    case 'TTNDRCA':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou a troca de titularidade, mas não foi realizada devido a débitos em aberto.`;
      break;
    case '2via':
      texto = `O(a) cliente ${nome}, do telefone ${telefone} e código de cliente ${codigo}, solicitou a segunda via da fatura.`;
      break;
    default:
      texto = 'Selecione uma opção válida.';
  }

  alert(texto);
  sessionStorage.setItem('copiarTexto', texto);
});

document.getElementById('copiarTexto').addEventListener('click', function() {
  const texto = sessionStorage.getItem('copiarTexto');
  if (texto) {
    navigator.clipboard.writeText(texto)
      .then(() => alert('Texto copiado para a área de transferência!'))
      .catch(() => alert('Erro ao copiar texto.'));
  } else {
    alert('Não há texto para copiar.');
  }
});

document.getElementById('limparFormulario').addEventListener('click', function() {
  document.getElementById('solicitacaoForm').reset();
});
