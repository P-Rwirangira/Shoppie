import { sendEmail } from './sendEmail'
import { userToken } from './tokenGenerator'
import dotenv from 'dotenv'

dotenv.config()

const testEmail = async () => {
    try {
        // Generate a test verification token
        const testUserId = '65d85f86c52ce6a706f85619' // Example user ID
        const verificationToken = await userToken(testUserId, 'rwpatrick001@gmail.com')
        const verificationUrl = `${process.env.URL_HOST}/api/v1/auth/verify/${verificationToken}`

        await sendEmail('account_verify', {
            name: 'Test User',
            email: 'rwpatrick001@gmail.com',
            link: verificationUrl,
        })
        console.log('Test email sent successfully')
    } catch (error) {
        console.error('Failed to send test email:', error)
    }
}

testEmail()
