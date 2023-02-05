const express = require('express')
const router = express.Router()
const { getCharacters, 
    addCharacter, 
    updateCharacter, 
    deleteCharacter 
} = require('../controllers/characterController')

router.route('/').get(getCharacters).post(addCharacter)
router.route('/:id').put(updateCharacter).delete(deleteCharacter)

module.exports = router

