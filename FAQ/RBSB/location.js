function showRecommendation() {
    const escolhaDaRegiao = document.getElementById('regioes');
    const regiaoEscolhida = escolhaDaRegiao.value;
    let recomendacao = '';
  
    switch (regiaoEscolhida) {
      case 'Plano Piloto':
        recomendacao = 'AG Lago Sul - SHIS QI 21, Lago Sul';
        break;
      case 'Riacho Fundo':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Sobradinho':
        recomendacao = 'AG Paranoá - Quadra 03, Área Especial 07, Paranoá';
        break;
      case 'Sobradinho II':
        recomendacao = 'AG Paranoá - Quadra 03, Área Especial 07, Paranoá';
        break;
      case 'Taguatinga':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Cruzeiro':
        recomendacao = 'AG Lago Sul - SHIS QI 21, Lago Sul';
        break;
      case 'Brazlândia':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Jardim Botânico':
        recomendacao = 'AG Lago Sul - SHIS QI 21, Lago Sul';
        break;
      case 'Candangolândia':
        recomendacao = 'AG Lago Sul - SHIS QI 21, Lago Sul';
        break;
      case 'Fercal':
        recomendacao = 'AG Paranoá - Quadra 03, Área Especial 07, Paranoá';
        break;
      case 'Arniqueira':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Itapoã':
        recomendacao = 'AG Paranoá - Quadra 03, Área Especial 07, Paranoá';
        break;
      case 'Guará':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Recanto':
        recomendacao = 'AG Samambaia - QN 406 Conjunto F, Samambaia Norte, Samambaia';
        break;
      case 'Sia':
        recomendacao = 'AG Lago Sul - SHIS QI 21, Lago Sul';
        break;
      case 'Varjão':
        recomendacao = 'AG Paranoá - Quadra 03, Área Especial 07, Paranoá';
        break;
      default:
        recomendacao = 'Não há recomendação para essa região.';
        break;
    }
  
    const recommendationDialog = document.getElementById('recommendationDialog');
    const recommendationText = document.getElementById('recommendationText');
  
    if (recomendacao !== 'Nenhuma recomendação encontrada') {
        recommendationText.innerHTML = `A unidade física mais próxima para <span style="color: red;">${regiaoEscolhida}</span> é: <br>${recomendacao}`;
      recommendationDialog.showModal();
    }
  }
  
  function closeDialog() {
    const recommendationDialog = document.getElementById('recommendationDialog');
    recommendationDialog.close();
  }

  function goBack() {
    window.history.back();
}
  