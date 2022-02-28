//Implememtando async e await

 function desafio1asRosasNaoFalam(){
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  function queixoMeAsRosas(){
    return new Promise<void>((resolve) =>{
      setTimeout(() => {
        console.log('Queixo-me às rosas')
        resolve()
       }, geraIntervaloAleatório());
    })
  };

  function masQueBobagem(){
    return new Promise<void>((resolve) =>{
      setTimeout(() => {
        console.log('Mas que bobagem');
         resolve()
      }, geraIntervaloAleatório());
    })
  };

  function asRosasNaoFalam(){
    return new Promise<void>((resolve) =>{
      setTimeout(() => {
        console.log('As rosas não falam');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  function simplesmenteAsRosasExalam(){
    return new Promise<void>((resolve) =>{
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  function oPerfumeQueRoubamDeTi(){
    return new Promise<void>((resolve) =>{
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.

  
  
  async function esperaTudo(){
      await queixoMeAsRosas();
      await masQueBobagem();
      await asRosasNaoFalam();
      await simplesmenteAsRosasExalam();
      await oPerfumeQueRoubamDeTi();
  }

  esperaTudo()
  
}

desafio1asRosasNaoFalam();