import axios from 'axios'
import { getCookie } from 'cookies-next'
import { baseURL } from '../helpers/url'

const api = axios.create({
    baseURL,
})
api.interceptors.request.use((req) => {
    const token = getCookie('token')
    if (typeof window !== 'undefined') {
        if (token) {
            req.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            }
        }
    }
    return req
})

export default api
