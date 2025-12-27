//ESTO SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS NATIVAS
//const { promisify } = require('util')
//const readFilePromise = promisify(fs.readFile)

// 📦 Importa la función readFile del módulo 'fs/promises' para trabajar con Promesas
const { readFile } = require('node:fs/promises');

// 🚀 Ejecuta la función 'init'
// Esta función asincrónica lee dos archivos de forma secuencial usando await
async function init() {
  console.log('LEYENDO EL PRIMER ARCHIVO.....'); // Mensaje antes de leer el primer archivo

  const text = await readFile('./archivo.txt', 'utf-8'); // Lee el contenido de archivo.txt
  console.log('primer texto:', text); // Muestra el contenido del primer archivo

  console.log('---> HACER COSAS MIENTRAS LEE EL ARCHIVO'); // Mensaje intermedio

  console.log('LEYENDO EL SEGUNDO ARCHIVO.....'); // Mensaje antes de leer el segundo archivo

  const secondText = await readFile('./archivo2.txt', 'utf-8'); // Lee el contenido de archivo2.txt
  console.log('segundo texto:', secondText); // Muestra el contenido del segundo archivo
}

init(); // 🔧 Llamada para ejecutar la función 'init'



// 🧪 Alternativa comentada: IIFE (Immediately Invoked Function Expression)
// Es otra forma de ejecutar una función asincrónica sin declararla por separado
// Se define y ejecuta al instante, útil para scripts rápidos o sin nombres de función
/*
;(
  async () => {
    console.log('LEYENDO EL PRIMER ARCHIVO.....');
    const text = await readFile('./archivo.txt', 'utf-8');
    console.log('primer texto:', text);

    console.log('---> HACER COSAS MIENTRAS LEE EL ARCHIVO');

    console.log('LEYENDO EL SEGUNDO ARCHIVO.....');
    const secondText = await readFile('./archivo2.txt', 'utf-8');
    console.log('segundo texto:', secondText);
  }
)();
*/


/*
🖨️ SALIDA SIMULADA EN TERMINAL:

LEYENDO EL PRIMER ARCHIVO.....
primer texto: Hola, este es el contenido del primer archivo.
---> HACER COSAS MIENTRAS LEE EL ARCHIVO
LEYENDO EL SEGUNDO ARCHIVO.....
segundo texto: Este es el segundo archivo, leído después.

✅ Como se usa async/await, el orden de ejecución es secuencial y predecible.
Ambas versiones (init y IIFE) producen la misma salida, solo difieren en cómo se estructuran.
*/





