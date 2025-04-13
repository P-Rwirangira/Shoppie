import Role from '../models/role'
import Permission from '../models/permission'
import logger from '../../helpers/logger'

export const seedRoles = async () => {
    try {
        await Role.deleteMany({})

        const adminPermissions = await Permission.find({
            name: { $in: ['manage_users', 'manage_roles', 'manage_permissions'] },
        })

        const buyerPermissions = await Permission.find({
            name: { $in: ['view_product', 'create_order', 'view_order'] },
        })

        const sellerPermissions = await Permission.find({
            name: { $in: ['create_product', 'edit_product', 'view_product'] },
        })

        const roles = [
            {
                name: 'admin',
                displayName: 'Administrator',
                permissions: adminPermissions.map((p) => p._id),
            },
            {
                name: 'buyer',
                displayName: 'Buyer',
                permissions: buyerPermissions.map((p) => p._id),
            },
            {
                name: 'seller',
                displayName: 'Vendor',
                permissions: sellerPermissions.map((p) => p._id),
            },
        ]

        await Role.insertMany(roles)
        logger.info('Roles seeded successfully')
    } catch (error) {
        logger.error('Error seeding roles:', error)
    }
}
