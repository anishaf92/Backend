const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()
const cors = require('cors');
app.use(cors());
const port = 3000
mongoose.connect('mongodb://localhost:27017/userDetails')
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(err))
app.use(express.json())
app.use('/user',userRoutes)

app.listen(port,(err) => {
    if(!err){
        console.log('Server is connected to port no ',port)
    }
    else{
        console.log(err)
    }
})


