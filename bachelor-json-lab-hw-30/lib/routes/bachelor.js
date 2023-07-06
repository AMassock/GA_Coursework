import express from 'express'
import bachelorController from '../controllers/bachelor.js'
import Router from 'express'
const router = Router()
const Bachelor = router


router.get('/', bachelorController.index)
router.get('/:year', bachelorController.showYear)
router.get('/name/:name', bachelorController.showName)
router.post('/', bachelorController.create)
router.put('/:id', bachelorController.edit)
router.delete('/:id', bachelorController.delete)

export default Bachelor
