
import db from "../db";
import {Book} from "../models/book.model";
 

//classe criada para configurar o comportamento do CRUD
class BookRepository{
  async findAllBooks() :Promise<Book[]>{
    const query =`
    SELECT uuid,book_name,author_name 
    FROM Book
    `
    const {rows} = await db.query<Book>(query)
    return rows || []

  }
  async findById(uuid:string): Promise<Book>{
    const query =`
    SELECT uuid,book_name,author_name
    FROM Book
    WHERE uuid = $1
    `
    const values = [uuid]
    const {rows} = await db.query<Book>(query, values)
    const [book] = rows
    return book
  }

  async create(book: Book ):Promise<string>{
      const script = `
      INSERT INTO Book (
          book_name,
          author_name
      )
      VALUES($1, $2)
      RETURNING uuid
      `
      
      const values = [book.book_name, book.author_name]
      
      const {rows} = await db.query<{uuid :string}>(script, values)
      const [newBook] =  rows
      return newBook.uuid
  }
  async update(book: Book ):Promise<void>{
    const script = `
    UPDATE Book 
    SET
        book_name = $1,
        author_name = $2
    WHERE uuid = $3
    `
    
    const values = [book.book_name, book.author_name, book.uuid]
    await db.query(script, values)

}
async remove(uuid:string):Promise<void>{
    const script =`
      DELETE 
      FROM Book
      WHERE uuid = $1
    `
    const values = [uuid]

    await db.query(script, values)

}
}
export default new BookRepository()