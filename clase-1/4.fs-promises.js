//ESTO SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS NATIVAS
//const { promisify } = require('util')
//const readFilePromise = promisify(fs.readFile)


// 📦 Importa el módulo 'fs/promises' de Node.js.
// Este módulo permite trabajar con el sistema de archivos usando Promesas (en lugar de callbacks).
const fs = require('node:fs/promises')


// 🟡 Inicia la lectura del primer archivo.
// Aunque se lanza esta operación, no se espera su resultado inmediatamente.
console.log('LEYENDO EL PRIMER ARCHIVO.....')

// 🧠 Se lee 'archivo.txt' de forma asincrónica.
// Cuando la lectura termina, se ejecuta el callback dentro del .then()
fs.readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log('primer texto:', text); // Imprime el contenido del primer archivo
});


// 🔄 Mientras se lee el primer archivo, el programa sigue ejecutando otras instrucciones.
console.log('---> HACER COSAS MIENTRAS LEE EL ARCHIVO')


// 🟡 Inicia la lectura del segundo archivo.
console.log('LEYENDO EL SEGUNDO ARCHIVO.....')

// 🧠 Se lee 'archivo2.txt' de forma asincrónica.
// Al terminar, se imprime su contenido.
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log('segundo texto:', text); // Imprime el contenido del segundo archivo
});

/*
🖨️ SIMULACIÓN DE SALIDA EN TERMINAL:

LEYENDO EL PRIMER ARCHIVO.....
---> HACER COSAS MIENTRAS LEE EL ARCHIVO
LEYENDO EL SEGUNDO ARCHIVO.....
primer texto: Hola, este es el contenido del primer archivo.
segundo texto: Este es el segundo archivo, leído después.

⚠️ Nota: El orden de los textos puede variar dependiendo de cuál archivo se lea más rápido.
Como se usan Promesas, la ejecución es no bloqueante y los archivos se leen en paralelo.
*/
