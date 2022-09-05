const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const products = [
    {
        name: 'Papas fritas',
        price: '3.50',
        description: 'Papas frescas preparadas en el momento, caseras, seleccionadas exclusivamente para tener una buena calidad y con un sabor inigualable.',
        imageUrl: 'https://i.blogs.es/f9cf25/degustacion-patatas/450_1000.jpg'
    },
    {
        name: 'Hamburguesa',
        price: '10.00',
        description: 'La mejor Hamburguesa del mercado, con productos finamente seleccionados, una presentación única y el mejor sabor.',
        imageUrl: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg'
    },
    {
        name: 'Pizza',
        price: '15.50',
        description: 'Masa preparada en el local, fermentada el tiempo suficiente para que de una mordida puedas sentir una sensación única de sabor y textura.',
        imageUrl: 'https://elgourmet.s3.amazonaws.com/recetas/share/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png'
    },
    {
        name: 'Completo',
        price: '8.50',
        description: 'Estos son los mejores completos de la ciudad, hechos con el mejor pan y ingredientes finamente seleccionados.',
        imageUrl: 'https://i2.wp.com/golososdelmundo.com/wp-content/uploads/2018/08/completo-italiano3.jpg?fit=1024%2C683'
    }
]

app.get('/products', (req, res) => {
    res.json(products)
})

app.listen(port, () => {
    console.log(`Shopping card server app listening on port ${port}`)
})