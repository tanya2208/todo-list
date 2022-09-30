const express = require('express')
const List = require('../models/List')
const router = new express.Router()

router.get('/lists', async (req, res) => {
    try{
        res.header("Access-Control-Allow-Origin", "*");
        const lists = await List.find({})
        res.send(lists)
    } catch(e){
        res.status(500).send()  
    }
})

router.post('/lists', async (req, res) => {
    const list = new List(req.body)
    try{
        await list.save()
        res.status(201).send(list)
    } catch(e){
        res.status(400).send(e)
    }
})

router.delete('/lists/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin: *');
        res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
        res.header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    try{
        
        const list = await List.findByIdAndDelete(req.params.id) 
        if(!list){
            return res.status(404).send()
        }

        res.send(list)
    } catch(e){
        res.status(500).send()
    }
})

module.exports = router