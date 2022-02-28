const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingredientes: string[]): string => {
  const conc = ingredientes.reduce((previous, current) =>previous.concat(' ' + current));
  return conc;
};

console.log(fazUmBigMac(ingredientes));