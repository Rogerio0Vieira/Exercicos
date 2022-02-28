const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos: any = [] // ???
const usuariosInativos: any = [] // ???

usuarios.forEach(element => {
    if(element.ativo === true){
      usuariosAtivos.push(JSON.stringify(element));
    }else if (element.ativo === false){
      usuariosInativos.push(JSON.stringify(element));
    }
});

console.log("Os usuários ativos são: "+usuariosAtivos);
console.log("Os usuários inativos são: "+usuariosInativos);