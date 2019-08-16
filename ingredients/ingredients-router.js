const express = require('express');
const router = express.Router();
const ingredients = require('./ingredients-model')

router.get('/', (req, res) => {
    ingredients.find()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(() => {
            res.status(500).json({ message: "doh!"})
        })
})

module.exports = router;