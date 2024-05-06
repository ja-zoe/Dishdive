const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/recipes/chicken', async (req, res) => {
    const response = await axios.get(
        "https://api.edamam.com/api/recipes/v2?q=buttermilk,eggs,flour&app_id=b8943b20&app_key=9f2a35c8f3e3842d3e03d63c2b00a69d&type=public"
    )
    console.log(response.data.hits[0].recipe.ingredients)
    res.json(response.data)
})

app.listen(3311, (err) => {
    if(err) {
        console.log("API server has problems!")
    } else {
        console.log('API server running without problems!')
    }
})