
import express,{Request,Response,NextFunction } from 'express'
import statusRoute from './routes/status.route'
import booksRouter from './routes/books.route'

//variavel criada para usar a biblioteca express 
const app = express()

//configuracao da aplicacaomiddlewares
app.use(express.json())//middleware
app.use(express.urlencoded({extended: true}))//permite o aninhamento de objetos para funcionamento do JSON

//configuracao das rotas
app.use(statusRoute)
app.use(booksRouter)

//inicializacao do servidor
app.listen(3000, () => {
  console.log('Server Open')
})