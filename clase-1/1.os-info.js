// Importa el módulo 'os' de Node.js, que permite acceder a información del sistema operativo
const os = require('node:os');

// Imprime un título en la consola para indicar que se mostrará información del sistema
console.log('INFORMACION DEL SISTEMA OPERATIVO:');
console.log('----------------------------------');

// Muestra el nombre del sistema operativo (por ejemplo, 'win32' para Windows)
console.log('NOMBRE DEL SISTEMA OPERATIVO', os.platform());

// Muestra la versión del sistema operativo (por ejemplo, '10.0.19045' en Windows 10)
console.log('VERSION DEL SISTEMA OPERATIVO', os.release());

// Muestra información detallada de los procesadores (CPU) del sistema
// Esto incluye modelo, velocidad, y tiempos de uso de cada núcleo
console.log('ARQUITECTURA', os.cpus());

// Vuelve a mostrar la información de los CPUs (esto es redundante, ya se mostró arriba)
console.log('CPUs', os.cpus());

// Muestra la cantidad de memoria libre en el sistema, convertida de bytes a megabytes
console.log('MEMORIA LIBRE', os.freemem() / 1024 / 1024);

// Muestra la cantidad total de memoria del sistema, también en megabytes
console.log('MEMORIA TOTAL', os.totalmem() / 1024 / 1024);

// Muestra el tiempo que el sistema ha estado encendido (uptime), convertido de segundos a horas
              console.log('uptime', os.uptime() / 60 / 60);
