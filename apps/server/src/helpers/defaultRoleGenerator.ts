import Role from '../database/models/role'
import logger from './logger'

const getDefaultRole = async () => {
    const defaultRole = await Role.findOne({ name: 'buyer' })
    if (!defaultRole) {
        logger.error('Default role not found.')
        return
    }
    const defaultRoleId = defaultRole._id
    return defaultRoleId
}

export default getDefaultRole
