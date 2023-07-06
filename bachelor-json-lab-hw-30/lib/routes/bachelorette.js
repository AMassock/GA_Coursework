import express from 'express'
const router = express.Router()
import bacheloretteController from '../controllers/bachelorette.js'


router.get('/', bacheloretteController.index)
router.get('/:year', bacheloretteController.showYear)
router.get('/name/:name', bacheloretteController.showName)
router.post('/', bacheloretteController.create)
router.put('/:id', bacheloretteController.edit)
router.delete('/:id', bacheloretteController.delete)

export default router