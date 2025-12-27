// 📦 Importa el módulo 'fs' de Node.js para trabajar con el sistema de archivos
const fs = require('node:fs');

// 🔹 Lee el primer archivo de forma sincrónica (bloquea la ejecución hasta terminar)
console.log('Leyendo el primer archivo....');
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // 🟡 Lee el contenido de archivo.txt
console.log('primer texto:', text); // 🖨️ Imprime el contenido del primer archivo

// 🔹 Mensaje intermedio (se imprime después de leer el primer archivo)
console.log('---> Hacer cosas mientras lee el archivo....');

// 🔹 Lee el segundo archivo también de forma sincrónica
console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8'); // 🟡 Lee el contenido de archivo2.txt
console.log('segundo texto', secondText); // 🖨️ Imprime el contenido del segundo archivo


/*
🖨️ SALIDA SIMULADA EN TERMINAL:

Leyendo el primer archivo....
primer texto: Hola, este es el contenido del primer archivo.
---> Hacer cosas mientras lee el archivo....
Leyendo el segundo archivo...
segundo texto: Este es el segundo archivo, leído después.

✅ Como se usa fs.readFileSync, el flujo es completamente secuencial.
Cada lectura bloquea la ejecución hasta que termina, por eso los mensajes y textos aparecen en orden exacto.
*/
