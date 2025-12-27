//ESTO SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS NATIVAS
//const { promisify } = require('util')
//const readFilePromise = promisify(fs.readFile)

// 📦 Importa la función readFile desde el módulo 'fs/promises'
// Este módulo ya trabaja con Promesas nativas, así que no necesitas usar 'promisify'
import { readFile } from 'node:fs/promises';

// 🚀 Ejecuta dos lecturas de archivos en paralelo usando Promise.all
// Esto permite que ambas operaciones se realicen al mismo tiempo, sin esperar una a la otra
Promise.all([
  readFile('./archivo.txt', 'utf-8'),       // 🟡 Lee el primer archivo
  readFile('./archivo2.txt', 'utf-8')       // 🟡 Lee el segundo archivo
]).then(([text, secondText]) => {
  // ✅ Cuando ambas lecturas terminan, se imprime su contenido
  console.log('primer texto:', text);       // 🖨️ Muestra el contenido del primer archivo
  console.log('segundo texto:', secondText); // 🖨️ Muestra el contenido del segundo archivo
});


/*
🖨️ SALIDA SIMULADA EN TERMINAL:

primer texto: Hola, este es el contenido del primer archivo.
segundo texto: Este es el segundo archivo, leído después.

✅ Como se usa Promise.all, ambas lecturas se ejecutan en paralelo.
La salida aparece cuando ambas Promesas se resuelven, manteniendo el orden de impresión definido en el .then().
*/










