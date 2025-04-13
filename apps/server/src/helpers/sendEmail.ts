import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import logger from './logger'

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

if (!EMAIL_USER || !EMAIL_PASS) {
    logger.error('Gmail credentials are missing from the .env')
    throw new Error('Gmail credentials are missing')
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
})

interface EmailData {
    name: string
    email: string
    link?: string
}

type Template =
    | 'account_verify'
    | 'User_Account_unblocked'
    | 'User_Account_Blocked'
    | 'reset_password'

// Email templates
const templates: Record<Template, (data: EmailData) => { subject: string; html: string }> = {
    account_verify: (data) => ({
        subject: 'Account Verification',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Please verify your account by clicking the link below:</p>
            <a href="${data.link}">${data.link}</a>
        `,
    }),
    User_Account_unblocked: (data) => ({
        subject: 'Account Unblocked',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Your account has been unblocked. You can now log in.</p>
        `,
    }),
    User_Account_Blocked: (data) => ({
        subject: 'Account Blocked',
        html: `
            <h1>Hello ${data.name},</h1>
            <p>Your account has been blocked. Please contact support for more information.</p>
        `,
    }),
    reset_password: (data) => {
        if (!data.link) throw new Error('Link is required for the reset_password template')

        return {
            subject: 'Reset Password',
            html: `
                <h1>Hello ${data.name},</h1>
                <p>You have requested a password reset. Please follow the link below to change your password:</p>
                <a href="${data.link}">Reset Password</a>
            `,
        }
    },
}

// Function to send email
export const sendEmail = async (template: Template, data: EmailData): Promise<void> => {
    const { subject, html } = templates[template](data)

    const mailOptions = {
        from: 'Chafetz <no-reply@chafetz.com>',
        to: data.email,
        subject,
        html,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log(`Email sent to ${data.email} with template "${template}"`)
    } catch (error) {
        console.error('Failed to send email:', error)
        throw new Error('Email sending failed')
    }
}
