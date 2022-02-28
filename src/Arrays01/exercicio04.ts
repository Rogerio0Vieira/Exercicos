const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

type TAlunos = Record<string, unknown>;


function ordenarAntes(arr: any[]){
  return arr.sort((a: { nota: number; },b: { nota: number; })=>(a.nota > b.nota) ? -1 : 1)
}
ordenarAntes(alunos)

function orderBy(original: TAlunos[], keys: string[]){
  ordenarAntes(original)
  return original.map(function(origin) {
    const newOriginal: TAlunos = {};
    keys.map(function(key) {
      return newOriginal[key] = origin[key];
    })
    return newOriginal;
  });
}

console.log(orderBy(alunos,['nota','nome']))
