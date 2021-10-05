const mainRoute = require("express").Router()
const userRoute = require("./user")

mainRoute.get("/",(req,res) => {
    res.status(200).json({
        message : "Server Ready"
    })
})

mainRoute.use(userRoute)

module.exports = mainRoute