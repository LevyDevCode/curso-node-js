/**PRIMERA APLICACION */
// 🔴 1. CALLBACK TRADICIONAL
// const fs = require('node:fs');

// fs.readdir('.', (err, files) => {
//   if (err) {
//     console.error('Error al leer el directorio: ', err);
//     return;
//   }

//   files.forEach(file => {
//     console.log(file);
//   });
// });

/*
📌 Tipo: Callback tradicional
📌 ¿Qué hace?
- Usa el módulo `fs` para leer el directorio actual.
- Usa una función con dos parámetros: `err` (error) y `files` (lista de archivos).
- Si hay error, lo muestra y termina con `return`.
- Si no hay error, imprime cada archivo con `forEach`.

📌 ¿Por qué usarlo?
- Es la forma clásica en Node.js para manejar tareas asincrónicas.
- Útil para aprender cómo funcionan los callbacks.
- Pero puede volverse difícil de leer si hay muchos callbacks anidados.
*/




// 🔵 2. PROMESAS
// const fs = require('node:fs/promises');

// fs.readdir('.')
//   .then(files => {
//     files.forEach(file => {
//       console.log(file);
//     });
//   })
//   .catch(err => {
//     if (err) {
//       console.error('Error al leer el directorio:', err);
//       return;
//     }
//   });

/*
📌 Tipo: Promesas
📌 ¿Qué hace?
- Usa `fs/promises`, que devuelve una promesa al leer el directorio.
- `.then()` se ejecuta si todo sale bien.
- `.catch()` se ejecuta si hay error.
- El `if (err)` dentro del `catch` es innecesario, porque `catch` solo se ejecuta si hay error.

📌 ¿Por qué usarlo?
- Las promesas son más limpias que los callbacks.
- Permiten encadenar tareas asincrónicas fácilmente.
- Son más modernas y recomendadas para proyectos reales.
*/




// ✅ 3. ASYNC/AWAIT (ACTIVO)
const fs = require('node:fs/promises');

async function mostrarArchivos() {
  try {
    const files = await fs.readdir('.');
    files.forEach(file => {
      console.log(file);
    });
  } catch (err) {
    console.error('Error al leer el directorio:', err);
  }
}

mostrarArchivos();

/*
📌 Tipo: Async/Await
📌 ¿Qué hace?
- Usa `fs/promises` para trabajar con promesas.
- `async function` permite usar `await` dentro.
- `await fs.readdir('.')` espera la lista de archivos.
- `try...catch` maneja errores de forma clara.
- Imprime cada archivo con `forEach`.

📌 ¿Por qué usarlo?
- Es la forma más moderna y clara de manejar código asincrónico.
- Se parece al código tradicional, pero funciona de forma no bloqueante.
- Ideal para proyectos profesionales y fáciles de mantener.
*/
