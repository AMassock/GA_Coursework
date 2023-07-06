import express from 'express'
const router = express.Router()
import Bachelor from './bachelor.js'
import Bachelorette from './bachelorette.js'

router.use('/bachelor', Bachelor)
router.use('/bachelorette', Bachelorette)

export default router
