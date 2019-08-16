const express = require('express');
const router = express.Router();
const recipes = require('./recipes-model')

router.get('/', (req, res) => {
    recipes.find()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(() => {
            res.status(500).json({ message: "doh!"})
        })
})

module.exports = router;