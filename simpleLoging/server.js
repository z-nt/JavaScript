const express = require('express')
var cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.db');

const app = express()
app.use(cors())
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

async function get_user(name) {
    return new Promise((resolve,reject)=>{
        db.get(`SELECT * FROM users\nWHERE users.username = '${name}'`,{},(err,row)=>{
            if (err)reject(err)
            resolve(row)
        })
    })
}


app.post('/', async function (req, res) {
    // console.log(req.body);
    let salt = await bcrypt.genSalt(saltRounds)
    let password = await bcrypt.hash(req.body.pass,salt)
    let result = await get_user(req.body.name)
    // db.run(`INSERT INTO users(username,password)\nVALUES ('${req.body.name}','${password}')`)
    res.send('ok')
})













app.listen(8080)