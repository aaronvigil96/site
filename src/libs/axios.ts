import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';

//baseURL: "https://aaronvigil.com.ar/api/"

const authApi = axios.create({
    baseURL: "http://localhost:3000/api/"
})

authApi.interceptors.request.use((config) => {
    
    const token = useAuthStore.getState().token;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
});


export default authApi