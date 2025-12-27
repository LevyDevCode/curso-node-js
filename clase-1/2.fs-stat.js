// Importa el módulo 'fs' (File System) de Node.js.
// A partir de Node 16, se recomienda usar 'node:fs' para indicar que es un módulo nativo.
// Este módulo permite interactuar con el sistema de archivos: leer, escribir, obtener información, etc.
const fs = require('node:fs');

// Obtiene información del archivo llamado 'archivo.txt' de forma sincrónica.
// 'statSync' es una función bloqueante, lo que significa que detiene la ejecución hasta obtener los datos.
// Devuelve un objeto de tipo 'fs.Stats' que contiene propiedades y métodos sobre el archivo.
const stats = fs.statSync('./archivo.txt');

// Imprime en consola varias propiedades del objeto 'stats' que describen el archivo:
console.log(
    stats.isFile(),         // ✅ Devuelve true si 'archivo.txt' es un archivo regular (no un directorio ni enlace).
    stats.isDirectory(),    // ✅ Devuelve true si es un directorio. En este caso, debería ser false.
    stats.isSymbolicLink(), // ✅ Devuelve true si el archivo es un enlace simbólico (como un acceso directo).
    stats.size              // ✅ Muestra el tamaño del archivo en bytes. Útil para saber cuánto ocupa.
);
