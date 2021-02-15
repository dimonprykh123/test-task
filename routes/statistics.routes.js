const {Router} = require("express")
const db = require("../db_connect")
const router = Router()

router.post("/graph", (req, res) => {
    try {
        const {from, to, id} = req.body
        db.all('SELECT page_views,clicks,date FROM users_statistic WHERE user_id =(?) AND date BETWEEN (?) AND (?) ORDER BY date', [id, from, to], (err, row) => {
            res.status(200).json({dates: row})
        })
    } catch (e) {
        res.status(500).json({error:"Wait your data is loading ! When server gives to you finish log - refresh page!"})
    }
})

module.exports = router