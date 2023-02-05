const asyncHandler = require('express-async-handler')

const Character = require('../models/characterModel')
const User = require('../models/userModel')

// @desc        Get character
// @route       GET /api/character
// @access      Private
const getCharacters = asyncHandler(async (req, res) => {
    const characters = await Character.find({user: req.user.id})

    res.status(200).json(characters)
})

// @desc        Set character
// @route       POST /api/character
// @access      Private
const addCharacter = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }

    if (!req.body.race) {
        res.status(400)
        throw new Error('Please add a race field')
    }

    if (!req.body.class) {
        res.status(400)
        throw new Error('Please add a class field')
    }

    const character = await Character.create({
        user: req.user.id,
        name: req.body.name,
        race: req.body.race,
        class: req.body.class
    })

    res.status(200).json(character)
})

// @desc        Update character
// @route       PUT /api/character
// @access      Private
const updateCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)

    if (!character) {
        res.status(400)
        throw new Error('Character not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the character user
    if (character.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedCharacter)
})

// @desc        Delete character
// @route       DELETE api/character
// @access      Private
const deleteCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)

    if (!character) {
        res.status(400)
        throw new Error('Character not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the character user
    if (character.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await character.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getCharacters,
    addCharacter,
    updateCharacter,
    deleteCharacter
}