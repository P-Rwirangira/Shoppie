import { Router } from 'express'
import { createRole, getAllRoles, updateRole, deleteRole } from '../controllers/roleController'

const router = Router()

router.post('/', createRole)
router.get('/', getAllRoles)
router.put('/:id', updateRole)
router.delete('/:id', deleteRole)

export default router
