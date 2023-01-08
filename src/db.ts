import { Pool } from "pg";

//conexao com o banco de dados usando uma "Pool"

const connectionString = 'postgres://rpohvcib:WKApLH7Fs2aTI1awzBc0Utdnb3ZLjPLi@tuffi.db.elephantsql.com/rpohvcib'


const db = new Pool({connectionString})

export default db
