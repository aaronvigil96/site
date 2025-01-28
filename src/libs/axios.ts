import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';

const authApi = axios.create({
    baseURL: "http://localhost:3000/"
})

authApi.interceptors.request.use((config) => {
    
    const token = useAuthStore.getState().token;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(token);
  
    return config;
});


export default authApi