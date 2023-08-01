import axios from "axios";
import { store } from '@/store'
// 请求实例
const axiosInstance = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        const { user: { token } } = store.getState();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => { return Promise.reject(err) }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => { return response.data },
    (err) => { return Promise.reject(err) }
)

// 请求函数
function generateRequestConfig(url, method, data) {
    return {
        url: url,
        method: method,
        [method === 'get' ? 'params' : 'data']: data,
    }
}

export function Axios(url, method, data) {
    return axiosInstance(generateRequestConfig(url, method, data))
}