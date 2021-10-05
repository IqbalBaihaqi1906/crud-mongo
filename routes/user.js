const userRoute = require("express").Router()
const User = require("../models/userModel")

userRoute.get("/users",async (req,res) => {
    const user = await User.find()
    res.status(200).json({
        message : user
    })
})

userRoute.post("/users",async (req,res) => {
    try {
        const Userpost = new User({
            name : req.body.name,
            address : req.body.address
        })
        const newUser = await Userpost.save()

        res.status(201).json({
            message : "user created",
            detail : newUser
        })

    } catch (error) {
        res.json({
            message : error.message
        })
    }
})

userRoute.patch('/users/:id',async (req,res) => {
    try {
        const userUpdate = await User.updateOne({_id:req.params.id}, {
            name : req.body.name,
            address : req.body.address
        })

        res.status(200).json({
            message : "Santri Updated",
            detail : userUpdate
        })
    } catch (error) {
        res.json({
            message : error.message
        })
    }
})

module.exports = userRoute
