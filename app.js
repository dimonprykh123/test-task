const db = require("./db_connect")
const express = require("express")
const fs = require('fs')


const app = express()
const port = 5000

app.use(express.json({extended: true}))
app.use("/api/users", require("./routes/users.routes"))
app.use("/api/users/statistic", require("./routes/statistics.routes"))

appStart()


function appStart() {
    f(201)
    s(serverStart, 1000)
}


function serverStart() {
    app.listen(port, () => {
        console.log("All statistic added and server started at port ", port)
    })
}


function f(num = null) {
    db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users';`,
        (err, row) => {
            console.log(row)
            if (!row) {
                db.run(`CREATE TABLE users
                    (id INT PRIMARY KEY NOT NULL, first_name VARCHAR(50) NOT NULL,
                    second_name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL,
                    gender VARCHAR(50) NOT NULL ,ip_address VARCHAR(50) NOT NULL) `)
                fs.readFile("users.json", (err, data) => {
                    let arr = JSON.parse(data)
                    const zap = db.prepare("INSERT INTO users (id,first_name,second_name,email,gender,ip_address) VALUES (?, ?, ?, ?, ?, ?)");
                    if(num) {
                        for (let i = 0; i < num; i++) {
                            zap.run([arr[i].id, arr[i].first_name, arr[i].last_name, arr[i].email, arr[i].gender, arr[i].ip_address]);
                        }
                    }
                    if(!num){
                        for (let i = 0; i < arr.length; i++) {
                            zap.run([arr[i].id, arr[i].first_name, arr[i].last_name, arr[i].email, arr[i].gender, arr[i].ip_address]);
                        }
                    }
                    zap.finalize(()=>console.log("all users add"));
                })
            }
        })

}


function s(callback, num=null) {
    db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users_statistic';`,
        (err, row) => {
            console.log(row)
            if (!row) {
                db.run(`CREATE TABLE users_statistic
                    (user_id INT NOT NULL,date DATE,
                   page_views INT, clicks INT)`)
                fs.readFile("users_statistic.json", (err, data) => {
                    let arr = JSON.parse(data)
                    const zap = db.prepare("INSERT INTO users_statistic (user_id,date,page_views,clicks) VALUES (?, ?, ?, ?)");
                    if(num) {
                        for (let i = 0; i < num; i++) {
                            zap.run([arr[i].user_id, arr[i].date, arr[i].page_views, arr[i].clicks]);
                        }
                    }
                    if(!num){
                        for (let i = 0; i < arr.length; i++) {
                            zap.run([arr[i].user_id, arr[i].date, arr[i].page_views, arr[i].clicks]);
                        }
                    }
                    zap.finalize(()=>callback());
                })
            }else{
                callback()
            }
        })
}


