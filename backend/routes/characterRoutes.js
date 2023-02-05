const express = require('express')
const router = express.Router()
const { getCharacters, 
    setCharacter, 
    updateCharacter, 
    deleteCharacter 
} = require('../controllers/characterController')

router.route('/').get(getCharacters).post(setCharacter)
router.route('/:id').put(updateCharacter).delete(deleteCharacter)

module.exports = router

