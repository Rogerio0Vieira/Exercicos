// jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez

const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

const others = ["fev", "mai", "ago", "nov"]

const frist = meses.slice(0, 1).concat(others[0]) //jan, fev
const second = meses.slice(1,2) // mar
const third = meses.slice(3, 4).concat(others[1]) // abr, mai
const fourth = meses.slice(4, 6)
const fifth = meses.slice(6, 8).concat(others[3]) // set, out, nov
const sixth = meses.slice(8)

const year = frist.concat(second,third, fourth, fifth, sixth)

console.log(year)