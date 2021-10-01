(() => {

  //Captura o menu mobile via data atributes
  const btnMobile = document.querySelector('[data-menu-mobile]');

  //funcao de que exibe ou oculta o menu
  function ativaMenu(){
    const menuMobile = document.querySelector('[data-link-menu]');

    //Toggle ativa caso não tenha e desativa caso tenha.
    menuMobile.classList.toggle('ativo');

  }

  //adiciona o evendo no botão de menu instaciado acima
  btnMobile.addEventListener('click',() => {

    //chama a função acima
    ativaMenu();

  })

})()

