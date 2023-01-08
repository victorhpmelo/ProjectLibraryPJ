import { Pool } from "pg";

//conexao com o banco de dados usando uma "Pool"
//inserir url do banco de dados
const connectionString = ''


const db = new Pool({connectionString})

export default db
