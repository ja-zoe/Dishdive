const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const con = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: 'password',
        database: 'dishdivedb'
    }
)

app.post('/register', (req,res)=>{
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    con.query(
        'INSERT INTO users (username,email,password) VALUES(?,?,?)',
        [username,email,password],
        (err,result)=>{
            if(err){
                console.log(err.code)
                if(err.code == 'ER_DUP_ENTRY'){
                    return res.send({message: 'Already a user with this username or email', code: err.code})
                }else{
                    return res.send({err: err})
                }
            }else{
                return res.send({userRegistered: true})
            }
        }
    )
})

app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    con.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err,result) => {
            if(err){
                return res.send({err: err})
            }

            if(result.length > 0){
                return res.send(result)
            }else{
                return res.send({message: 'User Not Found'})
            }
            
        }
    )
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('MySql database connected!')
    }
})

app.listen(3310,(err)=>{
    console.log('Backend Server Running')
})