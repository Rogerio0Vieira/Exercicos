//Exercico comentado devido ao erro por usar o mesmo array de objetos
/*const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

type TAlunos = Record<string, unknown>;

function pick(original: TAlunos[], keys: string[]){
  return original.map(function(origin) {
    const newOriginal: TAlunos = {};
    keys.map(function(key) {
      return newOriginal[key] = origin[key];
    })
    return newOriginal;
  });
}

pick(alunos, ['nome','bolsista'])*/

