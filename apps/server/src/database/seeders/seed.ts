import connectDB from '../config/db'
import { seedPermissions } from './permissionSeed'
import { seedRoles } from './roleSeed'
import seedAdminUser from './adminSeed'
import { sendEmail } from '../../helpers/sendEmail'
import { userToken } from '../../helpers/tokenGenerator'
import dotenv from 'dotenv'
import { IUser } from '../models/User'

dotenv.config()

const runSeeders = async () => {
    try {
        await connectDB()
        await seedPermissions()
        await seedRoles()
        const admin: IUser | undefined = await seedAdminUser()

        if (admin) {
            const verificationToken = await userToken(admin._id.toString(), admin.email)
            const verificationUrl = `${process.env.URL_HOST}/api/auth/verify/${verificationToken}`

            await sendEmail('account_verify', {
                name: `${admin.firstName} ${admin.lastName}`,
                email: admin.email,
                link: verificationUrl,
            })
        }

        console.log('All seeders completed successfully')
        process.exit(0)
    } catch (error) {
        console.error('Error running seeders:', error)
        process.exit(1)
    }
}

runSeeders()
