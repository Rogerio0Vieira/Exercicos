//Despertador Tiririca
function despertador(intervalo: number){
  const ms = intervalo * 1000
  setTimeout(() => {
    console.log(`passaram-se os ${intervalo} segundos, Acorda Abestado`);
  }, ms);
}

//Relogio
function clock(){
  const now = new Date();
  setInterval(()=>{
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  }, 1000) //Intervalo de 1 segundo para não bugar de vez 😂
}

clock()