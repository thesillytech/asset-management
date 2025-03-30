import { Pool } from 'pg'

//create a connection pool
const pool = new Pool({
    connectionString:process.env.DATABASE_URL
})

//export a resuable query function
export async function query(sql, params) {
    const res = await pool.query(sql, params)
    return res.rows
}