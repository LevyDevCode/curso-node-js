/*
const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.'
fs.readdir(folder)
    .then(files => {
     files.forEach(file => {
       console.log(file);
     });
   })
   .catch(err => {
     if (err) {
       console.error('Error al leer el directorio:', err);
       return;
     }
   });*/

//const { stat } = require('node:fs')
const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors') 

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try{
        files = await fs.readdir(folder)
    }catch{
        console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }
    const filesPromises = files.map(async file => {
        const filesPath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filesPath) //stat: informacion del archivo
        } catch {
            console.error(`No se pudo leer el directorio ${filesPath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        //return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize).padStart(10)} 
        return `${pc.white(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(8))} ${pc.yellow(fileModified)}`        
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(filesInfo => console.log(filesInfo))
}
ls(folder)