// Importa el módulo 'os' de Node.js, que permite acceder a información del sistema operativo
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

// Imprime un título en la consola para indicar que se mostrará información del sistema
console.log('INFORMACION DEL SISTEMA OPERATIVO:');
console.log('----------------------------------');

// Muestra el nombre del sistema operativo (por ejemplo, 'win32' para Windows)
console.log('NOMBRE DEL SISTEMA OPERATIVO', platform());

// Muestra la versión del sistema operativo (por ejemplo, '10.0.19045' en Windows 10)
console.log('VERSION DEL SISTEMA OPERATIVO', release());

// Muestra información detallada de los procesadores (CPU) del sistema
// Esto incluye modelo, velocidad, y tiempos de uso de cada núcleo
console.log('ARQUITECTURA', arch());

// Vuelve a mostrar la información de los CPUs (esto es redundante, ya se mostró arriba)
console.log('CPUs', cpus());

// Muestra la cantidad de memoria libre en el sistema, convertida de bytes a megabytes
console.log('MEMORIA LIBRE', freemem() / 1024 / 1024);

// Muestra la cantidad total de memoria del sistema, también en megabytes
console.log('MEMORIA TOTAL', totalmem() / 1024 / 1024);

// Muestra el tiempo que el sistema ha estado encendido (uptime), convertido de segundos a horas
console.log('uptime', uptime() / 60 / 60);
