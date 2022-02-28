//Desafio das Rosas usando Callback
const desafio1asRosasNaoFalam = () => {
  type callbackFn = () => void;
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  // métodos de versos. Estes métodos deverão ser modificados.
  const queixoMeAsRosas = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Queixo-me às rosas');
      return callback();
    }, geraIntervaloAleatório());
  };
  const masQueBobagem = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Mas que bobagem');
      return callback();
    }, geraIntervaloAleatório());
  };
  const asRosasNaoFalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('As rosas não falam');
      return callback();
    }, geraIntervaloAleatório());
  };
  const simplesmenteAsRosasExalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      return callback();
    }, geraIntervaloAleatório());
  };
  const oPerfumeQueRoubamDeTi = () => {
    setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
      //return callback();
    }, geraIntervaloAleatório());
  };
  // Tentativa de cantar a música. Este bloco precisa ser modificado.
  queixoMeAsRosas(() =>{
     masQueBobagem(() =>{
      asRosasNaoFalam(() =>{
        simplesmenteAsRosasExalam(() =>{
          oPerfumeQueRoubamDeTi()
        });
      });
    });
  });
  
  
  
  
}
desafio1asRosasNaoFalam();