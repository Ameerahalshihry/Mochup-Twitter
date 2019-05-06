const express = require('express')
const router = express.Router()
const User = require('../models/user')


// find all users
router.get('/' , (req,res) => {
    User.find()
    .then((users) => {
    res.json({users : users})
    })
    .catch( err => {
    res.json({massage:"something wrong !!"})
    })
    })
    
        router.post('/' , (req,res) => {
            User.create(req.body)
            .then(() => {
                res.json({massage:"User create successfully "})
            })
            .catch( (err) => {
                res.json({massage:"something wrong !!"})
        })
    })

    module.exports = router