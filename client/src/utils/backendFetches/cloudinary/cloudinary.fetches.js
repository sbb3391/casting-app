import axios from 'axios'
import { BASE_URL } from '../baseUrl'

export const cloudinaryUpload = (fileToUpload) => {
    return axios.post(BASE_URL + '/cloudinary-upload', fileToUpload)
}