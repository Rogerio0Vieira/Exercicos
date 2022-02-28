const desafio1asRosasNaoFalam = () => {
  type callbackFn = () => void;
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.
  const queixoMeAsRosas = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  const masQueBobagem = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  const asRosasNaoFalam = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('As rosas não falam');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  const simplesmenteAsRosasExalam = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  const oPerfumeQueRoubamDeTi = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
        resolve()
      }, geraIntervaloAleatório());
    })
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.

  function tocaTudo(){
    queixoMeAsRosas()
    .then(() => {
      return masQueBobagem();
    })
    .then(() => {
      return asRosasNaoFalam();
    })
    .then(() => {
      return simplesmenteAsRosasExalam();
    })
    .then(() => {
      return oPerfumeQueRoubamDeTi();
    })
  }

  tocaTudo()
  // queixoMeAsRosas();
  // masQueBobagem();
  // asRosasNaoFalam();
  // simplesmenteAsRosasExalam();
  // oPerfumeQueRoubamDeTi();
}

desafio1asRosasNaoFalam();