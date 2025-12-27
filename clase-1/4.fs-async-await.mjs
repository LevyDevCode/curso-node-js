//ESTO SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS NATIVAS
//const { promisify } = require('util')
//const readFilePromise = promisify(fs.readFile)


/*import { readFile } from 'node:fs/promises';

console.log('LEYENDO EL PRIMER ARCHIVO.....')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text); 
console.log('---> HACER COSAS MIENTRAS LEE EL ARCHIVO')


console.log('LEYENDO EL SEGUNDO ARCHIVO.....')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText);  */

// 📦 Importa la función readFile desde el módulo 'fs/promises' de Node.js.
// Este módulo permite leer archivos de forma asincrónica usando Promesas.
import { readFile } from 'node:fs/promises';

// 🧠 Función principal asincrónica que lee dos archivos secuencialmente.
async function leerArchivos() {
  console.log('LEYENDO EL PRIMER ARCHIVO.....'); // Se imprime inmediatamente
  const text1 = await readFile('./archivo.txt', 'utf-8'); // Espera a que se lea el primer archivo
  console.log('primer texto:', text1); // Imprime el contenido del primer archivo

  console.log('---> HACER COSAS ENTRE LECTURAS'); // Se imprime después del primer archivo

  console.log('LEYENDO EL SEGUNDO ARCHIVO.....'); // Se imprime antes de leer el segundo archivo
  const text2 = await readFile('./archivo2.txt', 'utf-8'); // Espera a que se lea el segundo archivo
  console.log('segundo texto:', text2); // Imprime el contenido del segundo archivo
}

// 🚀 Ejecuta la función
leerArchivos();

/*
🖨️ SIMULACIÓN DE SALIDA EN TERMINAL:

LEYENDO EL PRIMER ARCHIVO.....
primer texto: Hola, este es el contenido del primer archivo.
---> HACER COSAS ENTRE LECTURAS
LEYENDO EL SEGUNDO ARCHIVO.....
segundo texto: Este es el segundo archivo, leído después.

✅ Como se usa async/await, el orden de ejecución es secuencial y predecible.
Cada lectura espera a que la anterior termine antes de continuar.
*/

