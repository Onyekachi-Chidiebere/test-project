const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
const port = process.env.PORT;
const axios = require('axios');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.options('*',cors())

app.post('/login',async(req,res)=>{
    console.log('here')
    return res.status(200).send()
})
(async()=>{
    try {
        let url = 'https://hoblist.com/movieList';
        let info ={
            category:'movies',
            language:'telugu',
            genre:'all',
            sort:'voting'
        }
        let response = await axios.post(url,info)

        console.log(response)
    } catch (error) {
        console.log(error)
    }
})()
app.listen(port||2010,()=>{
    console.log('Server running on port 2010')
})