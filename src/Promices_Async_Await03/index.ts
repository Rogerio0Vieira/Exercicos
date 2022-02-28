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

  function sleep(ms){
    return new Promise((resolve, reject) => {
      setTimeout(() => {

      }, ms)
    })
  }

  sleep(800)
    .then((resposta) => {
      return queixoMeAsRosas();
      sleep(200)
    })
    .then((resposta) => {
      return masQueBobagem();
      sleep(300)
    })
    .then((resposta)=>{
      return asRosasNaoFalam();
      sleep(400)
    })
    .then((resposta) => {
      return simplesmenteAsRosasExalam();
      sleep(500)
    })
    .then((resposta) => {
      return oPerfumeQueRoubamDeTi();
      sleep(600)
    })
    
}

desafio1asRosasNaoFalam();