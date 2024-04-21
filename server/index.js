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