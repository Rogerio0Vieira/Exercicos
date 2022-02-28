//Implememtando async e await

 function desafio1asRosasNaoFalam(){
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  function queixoMeAsRosas(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log('Queixo-me às rosas')
        return resolve
       }, geraIntervaloAleatório());
    })
  };

  function masQueBobagem(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log('Mas que bobagem');
         return resolve
      }, geraIntervaloAleatório());
    })
  };

  function asRosasNaoFalam(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log('As rosas não falam');
        return resolve
      }, geraIntervaloAleatório());
    })
  };

  function simplesmenteAsRosasExalam(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
      }, geraIntervaloAleatório());
    })
  };

  function oPerfumeQueRoubamDeTi(){
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
      }, geraIntervaloAleatório());
    })
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.

  // 
  
  // async function esperaTudo(){
  //     await queixoMeAsRosas();
  //     await masQueBobagem();
  //     await asRosasNaoFalam();
  //     await simplesmenteAsRosasExalam();
  //     await oPerfumeQueRoubamDeTi();
  // }

  queixoMeAsRosas()
  .then(() =>masQueBobagem)
  .then(() =>asRosasNaoFalam)
  .then(() =>simplesmenteAsRosasExalam)
  .then(()=>oPerfumeQueRoubamDeTi)

  // async function esperaTudo(){
  //     const frist = await queixoMeAsRosas();
  //     const second = await masQueBobagem();
  //     const trird = await asRosasNaoFalam();
  //     const fourth = await simplesmenteAsRosasExalam();
  //     const fifth = await oPerfumeQueRoubamDeTi();
  // }

  
  // esperaTudo()
  

  // await queixoMeAsRosas();
  // await masQueBobagem();
  // await asRosasNaoFalam();
  // await simplesmenteAsRosasExalam();
  // await oPerfumeQueRoubamDeTi();
}

desafio1asRosasNaoFalam();