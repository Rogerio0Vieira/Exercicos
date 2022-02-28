//Implememtando async e await

 async function desafio1asRosasNaoFalam(){
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  async function queixoMeAsRosas(){
    await setTimeout(() => {
     console.log('Queixo-me às rosas');
    }, geraIntervaloAleatório());
  };

  async function masQueBobagem(){
    await setTimeout(() => {
      console.log('Mas que bobagem');
    }, geraIntervaloAleatório());
  };

  async function asRosasNaoFalam(){
    await setTimeout(() => {
      console.log('As rosas não falam');
    }, geraIntervaloAleatório());
  };

  async function simplesmenteAsRosasExalam(){
    await setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
    }, geraIntervaloAleatório());
  };

  async function oPerfumeQueRoubamDeTi(){
    await setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
    }, geraIntervaloAleatório());
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.

  queixoMeAsRosas()
  .then(() => masQueBobagem())
  .then(() => asRosasNaoFalam())
  .then(() => simplesmenteAsRosasExalam())
  .then(() => oPerfumeQueRoubamDeTi())

  await queixoMeAsRosas();
  await masQueBobagem();
  await asRosasNaoFalam();
  await simplesmenteAsRosasExalam();
  await oPerfumeQueRoubamDeTi();
}

desafio1asRosasNaoFalam();