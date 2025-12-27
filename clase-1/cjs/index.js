/**
console.log('HOLA, MUNDO')
console.info('HOLA, MUNDO')
console.error('HOLA, MUNDO')
**/
//VARIABLES GLOBALES

//console.log(window)

//console.log(typeof window)

//console.log(globalThis)

//globalThis.console.log('Hola')

// function sum (a, b) {
//     return a + b
// }


// CommonJS require module
const sum = require('./sum')
console.log(sum(1,2))
