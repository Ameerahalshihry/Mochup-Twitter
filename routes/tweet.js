const express = require('express')
const router = express.Router()
const Tweet = require('../models/tweet')


// find all tweets
router.get('/' , (req,res) => {
    Tweet.find()
    .then((tweets) => {
    res.json({tweets : tweets})
    })
    .catch( err => {
    res.json({massage:"something wrong !!"})
    })
    })
    
        router.post('/' , (req,res) => {
            Tweet.create(req.body)
            .then(() => {
                res.json({massage:"tweet create successfully "})
            })
            .catch( (err) => {
                res.json({massage:"something wrong !!"})
        })
    })

    module.exports = router