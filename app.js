const express = require('express')
const app = express()
const route = require("./routes/index")
const mongoose = require('mongoose')
require("dotenv/config")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT

app.use(route)

// connect to db 
mongoose.connect(process.env.DB_CONNECTION_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
let db = mongoose.connection
db.on('error',console.error.bind(console,"Database Connection Error!"))
db.once('open', () => {
    console.log('Database Connected!')
})

// listen
app.listen(PORT,() => console.log(`Server running at port ${PORT}`))