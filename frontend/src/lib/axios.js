import axios from "axios"

export const axiosInstance  = axios.create({
    baseURL: import.meta.env.MODE ==="development" ? "http://localhost:5001" : "https://real-time-chat-application-jxy1.onrender.com",
    withCredentials:true,
})