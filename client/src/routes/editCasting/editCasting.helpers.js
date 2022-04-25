import { cloudinary } from 'cloudinary';
import { cloudinaryUpload } from '../../utils/backendFetches/cloudinary/cloudinary.fetches'

export const uploadToCloudinary = (upload, newFilepath) => {
    cloudinary.v2.uploader.upload(upload, {"public_id": newFilepath})
}