import { BASE_URL } from '../baseUrl'
import axios from 'axios';

export const fetchCastingRole = (castingRoleId) => {
    return axios.get(`${BASE_URL}/castingRoles/${castingRoleId}`)
        .then(resp => {
            debugger;
            return resp.data 
        })
}