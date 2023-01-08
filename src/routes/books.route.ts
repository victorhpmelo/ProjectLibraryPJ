import { Router,Request,Response,NextFunction } from 'express';
import {StatusCodes } from 'http-status-codes'
import booksRepository from '../repositories/books.repository';

const booksRouter = Router()

//Organizacao do funcionamento do CRUD usando as Promises para a execucao ser assincrona

//READ = OK
booksRouter.get('/book',async (req : Request,res: Response,next: NextFunction)=> {
  const books = await booksRepository.findAllBooks()
  res.status(StatusCodes.OK).send(books)
})
//READ por ID = OK
booksRouter.get('/book/:uuid',async (req : Request<{uuid : string}>,res: Response,next: NextFunction) => {
  const uuid = req.params.uuid
  const books = await booksRepository.findById(uuid)
  res.status(StatusCodes.OK).send(books)
})

//CREATE = OK
booksRouter.post('/book', async (req : Request,res: Response,next: NextFunction)=> {
  const newBook = req.body
  const uuid = await booksRepository.create(newBook)  
  res.status(StatusCodes.CREATED).send(uuid)
})  

//UPDATE = OK
booksRouter.put('/book/:uuid', async (req : Request<{uuid : string}>,res: Response,next: NextFunction)=> {
    const uuid = req.params.uuid
    const modifiedBook = req.body
    modifiedBook.uuid = uuid
    await booksRepository.update(modifiedBook)
  res.status(StatusCodes.OK).send()
})

//DELETE = OK
 booksRouter.delete ('/book/:uuid', async (req : Request,res: Response,next: NextFunction)=>{
  const uuid = req.params.uuid
  await booksRepository.remove(uuid)
 res.sendStatus(StatusCodes.OK)
})
export default booksRouter