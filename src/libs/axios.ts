import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';

const authApi = axios.create({
    baseURL: "https://aaronvigil.com.ar/api/"
})

authApi.interceptors.request.use((config) => {
    
    const token = useAuthStore.getState().token;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
});


export default authApi