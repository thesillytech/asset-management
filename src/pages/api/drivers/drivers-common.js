import { query } from '../../../utilities/db.js'

export default async function handler(req, res) {

    const sql = `select * from public."Drivers_Common"`

    try {
        const result = await query(sql)
        res.status(200).json({
            success: true,
            results: result
        })
    }
    catch (error) {
        console.error('Database query error:', error)
        res.status(500).json({
            success: false,
            error: 'Database query failed'
        })
    }
}