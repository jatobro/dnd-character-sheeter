const express = require('express')
const router = express.Router()
const { getSheet, setSheet, updateSheet, deleteSheet } = require('../controllers/sheetController')

router.route('/').get(getSheet).post(setSheet)
router.route('/:id').put(updateSheet).delete(deleteSheet)

module.exports = router

