
const express = require('express')
// instancio servidor y persistencia
const app = express()

// const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

const routerProducts = require('./routes/products.Router')
const carritosRouter = require('./routes/cart.Router')
//--------------------------------------------



//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', routerProducts)
app.use('/api/carritos', carritosRouter)
app.get('*', function (req, res) {
    res.send({ status: "error", description: `ruta ${req.url} método ${req.method} no implementada` });
})

module.exports = app