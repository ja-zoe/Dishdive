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
                    return res.send({message: err, code: err.code})
                }
            }else{
                res.send({message:'User Registered!'})
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