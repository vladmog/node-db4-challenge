const express = require('express');
const router = express.Router();
const recpipe_ingredients = require('./r_i-model')

router.get('/', (req, res) => {
    recpipe_ingredients.find()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(() => {
            res.status(500).json({ message: "doh!"})
        })
})

module.exports = router;