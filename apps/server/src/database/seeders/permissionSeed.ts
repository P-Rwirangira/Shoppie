import logger from '../../helpers/logger'
import Permission from '../models/permission'

const permissions = [
    { name: 'create_product' },
    { name: 'edit_product' },
    { name: 'delete_product' },
    { name: 'view_product' },
    { name: 'create_order' },
    { name: 'edit_order' },
    { name: 'delete_order' },
    { name: 'view_order' },
    { name: 'manage_users' },
    { name: 'manage_roles' },
    { name: 'manage_permissions' },
]

export const seedPermissions = async () => {
    try {
        await Permission.deleteMany({})
        await Permission.insertMany(permissions)
        logger.info('Permissions seeded successfully')
    } catch (error) {
        logger.error('Error seeding permissions:', error)
    }
}
