const asyncHandler = require('express-async-handler')

// @desc        Get sheet
// @route       GET /api/sheet
// @access      Private
const getSheet = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get sheet'})
})

// @desc        Set sheet
// @route       POST /api/sheet
// @access      Private
const setSheet = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set sheet'})
})

// @desc        Update sheet
// @route       PUT /api/sheet
// @access      Private
const updateSheet = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update sheet ${req.params.id}`})
})

// @desc        Delete sheet
// @route       DELETE api/sheet
// @access      Private
const deleteSheet = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete sheet ${req.params.id}`})
})

module.exports = {
    getSheet,
    setSheet,
    updateSheet,
    deleteSheet
}