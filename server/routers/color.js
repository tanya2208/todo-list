const express = require('express')
const Color = require('../models/Color')
const router = new express.Router()

router.get('/colors', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    try{
        const colors = await Color.find({})
        res.send(colors)
    } catch(e){
        res.status(500).send()  
    }
})

router.post('/colors', async (req, res) => {
    const color = new Color(req.body)
    try{
        await color.save()
        res.status(201).send(color)
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router