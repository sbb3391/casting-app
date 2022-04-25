import { BASE_URL } from '../baseUrl'
import axios from 'axios';

export const fetchCasting = (castingId) => {
    return axios.get(`${BASE_URL}/castings/${castingId}`)
        .then(resp => {
            return resp.data 
        })
}