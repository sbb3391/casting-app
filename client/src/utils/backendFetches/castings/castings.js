import { BASE_URL } from '../baseUrl'
import axios from 'axios';

export const fetchAllCastings = () => {
    return axios.get(`${BASE_URL}/castings`)
        .then(resp => {
            return resp.data 
        })
}