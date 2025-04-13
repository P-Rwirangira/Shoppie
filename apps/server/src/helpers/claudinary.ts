import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config()

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

interface UploadResult {
    public_id: string
    secure_url: string
    url: string
}

const uploadImage = async (imageBuffer: Buffer, folder: string = 'chafetz'): Promise<UploadResult> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                resource_type: 'image',
                folder: folder,
                transformation: [
                    { width: 800, height: 800, crop: 'limit' },
                    { quality: 'auto' },
                    { format: 'auto' }
                ]
            },
            (error, result) => {
                if (error) {
                    reject(error)
                } else if (result) {
                    resolve({
                        public_id: result.public_id,
                        secure_url: result.secure_url,
                        url: result.url
                    })
                } else {
                    reject(new Error('Upload failed'))
                }
            }
        ).end(imageBuffer)
    })
}

export default uploadImage