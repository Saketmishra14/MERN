import express from 'express'
import { homeController} from '../controllers/homeController.js'
import {aboutController } from '../controllers/aboutController.js'

const router =express.Router()

router.get("/about",aboutController)
router.get("/home",homeController);

export default router;