const {Router} = require("express")
const db = require("../db_connect")
const router = Router()

router.get("/people_count", (req, res) => {
    try {
        db.get(`SELECT COUNT(*) FROM users`, (err, row) => {
            const obj = Object.fromEntries(Object.entries(row).map(([key, val], idx) => [idx, val]))
            res.status(200).json({count: obj})
        })
    } catch (e) {
        res.status(500).json({error:"Wait your data is loading ! When server gives to you finish log - refresh page!"})
    }
})

router.post("/limit_skip", (req, res) => {
    try {
        const {limit, skip} = req.body
        db.all(`SELECT * FROM users LIMIT ${skip},${limit} `, (err, row) => {
            const sql = db.prepare(`SELECT page_views,clicks FROM users_statistic WHERE user_id=(?)`)
            for (let j = 0; j < row.length; j++) {
                sql.all(row[j].id, (err, result) => {
                    let clicks = 0
                    let pages = 0
                    for (let i = 0; i < result.length; i++) {
                        clicks += result[i].clicks
                        pages += result[i].page_views
                    }
                    row[j].clicks = clicks
                    row[j].pages = pages
                })

            }
            sql.finalize(() => res.status(200).json({row}))
        })
    }catch (e) {
        res.status(500).json({error:"Wait your data is loading ! When server gives to you finish log - refresh page!"})
    }
})

module.exports = router