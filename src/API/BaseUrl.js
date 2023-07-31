import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://full-ecommerce-eight.vercel.app" })

export default baseUrl