document.getElementById('gerarTexto').addEventListener('click', function() {
  const nome = document.getElementById('nomeCliente').value;
  const telefone = document.getElementById('telefoneCliente').value;
  const codigo = document.getElementById('codigoCliente').value;
  const opcao = document.getElementById('opcao').value;
  let texto = '';

  switch (opcao) {
    case 'ligamento':
      texto = `O (a) cliente ${nome} do telefone ${telefone} e CC ${codigo} solicitou ligamento definitivo de sua UC.`;
      break;
    case 'desligamento':
      texto = `O (a) cliente ${nome} do telefone ${telefone} e CC ${codigo} solicitou desligamento definitivo de sua UC.`;
      break;
    case 'TT':
      texto = `O (a) cliente ${nome} do telefone ${telefone} e CC ${codigo} solicitou a troca de titularidade e esta foi realizada.`;
      break;
      case 'TTNDRCA':
      texto = `O (a) cliente ${nome}, do telefone ${telefone} e CC ${codigo} solicitou a troca de titularidade, porém não foi realizada devido a débitos em aberto.`;
      break;
      case '2via':
        texto = `O (a) cliente ${nome} do telefone ${telefone} e CC ${codigo} solicitou a verbalização da 2ª via da fatura.`;
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
