import express from 'express'
import routerProd from './routes/products.routes.js'
import routerCart from './routes/carts.routes.js'

const app = express()
const PORT = 4000

// Middlewares
app.use(express.json())//permite trabajar con el formato JSON en express
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/products', routerProd)
app.use('/api/carts', routerCart)

// Server
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}
http://localhost:${PORT}`)
})