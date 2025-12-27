const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// gracias express ya tiene un middleware para hacer todo el codigo cometado lo de abajo 
app.use(express.json())

/** 
app.use((req, res, next) => {
    //console.log('mi primer middleware')
    //trackear la request a la base de datos
    //revisar si el usuario tiene las cookies
    //next()

    if (req.method !== 'POST') return next()
        if (req.headers['content-type'] !== 'application/json') return next()

    //solo llegan request qye son POST y que tienen el header Content-Type: aplication/json
    let body = ''

    //escuchar el evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        //mutar la request y meter la informacion en el req.body
        req.body = data
        next()
    })
})
*/

app.get('/pokemon/ditto', (req, res) => {
    //res.json({message: 'Hola mundo'})
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    // req.body deberiamos guardar en base de datos 
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})
