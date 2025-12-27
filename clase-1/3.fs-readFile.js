/*
// 🔁 BLOQUE DE CÓDIGO SINCRÓNICO
// Este bloque usa fs.readFileSync, que lee los archivos de forma bloqueante.
// El programa espera a que se termine de leer cada archivo antes de continuar.

const fs = require('node:fs')

console.log('LEYENDO EL PRIMER ARCHIVO.....')
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // Lee el primer archivo de forma sincrónica
console.log(text); // Imprime el contenido del primer archivo

console.log('LEYENDO EL SEGUNDO ARCHIVO.....')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8'); // Lee el segundo archivo de forma sincrónica
console.log(secondText); // Imprime el contenido del segundo archivo

// 🖨️ SALIDA EN TERMINAL (orden garantizado):
// LEYENDO EL PRIMER ARCHIVO.....
// (contenido de archivo.txt)
// LEYENDO EL SEGUNDO ARCHIVO.....
// (contenido de archivo2.txt)
*/




// 🔁 BLOQUE DE CÓDIGO ASINCRÓNICO
// Este bloque usa fs.readFile, que lee los archivos sin bloquear el flujo del programa.
// Las lecturas se ejecutan en segundo plano, y el programa continúa mientras tanto.

const fs = require('node:fs')

console.log('LEYENDO EL PRIMER ARCHIVO.....')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    // Este callback se ejecuta cuando la lectura del archivo termina
    console.log('primer texto:', text); // Imprime el contenido del primer archivo
});

console.log('---> HACER COSAS MIENTRAS LEE EL ARCHIVO'); // Se imprime inmediatamente

console.log('LEYENDO EL SEGUNDO ARCHIVO.....')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    // Este callback se ejecuta cuando la lectura del segundo archivo termina
    console.log('segundo texto:', text); // Imprime el contenido del segundo archivo
});

// 🖨️ SALIDA EN TERMINAL (orden no garantizado):
// LEYENDO EL PRIMER ARCHIVO.....
// ---> HACER COSAS MIENTRAS LEE EL ARCHIVO
// LEYENDO EL SEGUNDO ARCHIVO.....
// primer texto: (contenido de archivo.txt)
// segundo texto: (contenido de archivo2.txt)
