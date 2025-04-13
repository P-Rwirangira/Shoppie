import bcrypt from 'bcrypt'

const saltRounds = 12

export const passwordEncrypt = async (password: string): Promise<string> => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    } catch (error) {
        throw new Error('Error encrypting password')
    }
}

export const passwordCompare = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword)
        return isMatch
    } catch (error) {
        throw new Error('Error comparing passwords')
    }
}