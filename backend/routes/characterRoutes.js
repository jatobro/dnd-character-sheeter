const express = require('express')
const router = express.Router()
const { getCharacters, 
    addCharacter, 
    updateCharacter, 
    deleteCharacter 
} = require('../controllers/characterController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getCharacters).post(protect, addCharacter)
router.route('/:id').put(protect, updateCharacter).delete(protect, deleteCharacter)

module.exports = router

