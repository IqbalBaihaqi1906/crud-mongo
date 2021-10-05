const mainRoute = require("express").Router()

mainRoute.get("/",(req,res) => {
    res.status(200).json({
        message : "Server Ready"
    })
})

module.exports = mainRoute