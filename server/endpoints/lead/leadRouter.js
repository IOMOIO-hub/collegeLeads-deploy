import Router from 'express'
import leadController from './leadController.js'


const router = new Router()

router.post('/new', leadController.createLead)

export default router
