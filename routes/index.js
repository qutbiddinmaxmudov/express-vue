import { Router } from 'express'
import { getAll, create, deleteServer } from '../controllers/index.js'
const router = Router()

router.get('/api/server', getAll)

router.delete('/api/server/:id', deleteServer)

router.post('/api/server', create)
export default router
