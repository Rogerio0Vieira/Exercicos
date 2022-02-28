const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

type TAlunos = Record<string, unknown>;

 // no final dar um return do array de objetos de acordo com o array de strings

// function orderBy(original: TAlunos[], keys: string[]){
//   return original.map(function(origin) {
//     const newOriginal: TAlunos = {};
//     keys.map(function(key) {
//       newOriginal[key] = origin[key];
//       origin.sort(function(a, b) {
//         return a.localeCompare()
//       })
//       return
//     })
//     return newOriginal;
//   });
// }


function orderBy(original: TAlunos[], keys: string[]){
  return original.map(function(origin) {
    const newOriginal: TAlunos = {};
    keys.map(function(key) {
      origin.sort((a,b)=> (a.key < b.key) ? -1 : 1)
      return newOriginal[key] = origin[key];
    })
    return newOriginal;
  });
}

