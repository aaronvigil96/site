import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    token: string;
    isAuth: boolean;
    setToken:(tokenValue:string) => void;
    logout:() => void;
}

export const useAuthStore = create(persist<AuthState>(
    (set) => ({
    token: '',
    isAuth: false,
    setToken:(tokenValue) => set(() => ({
        token: tokenValue,
        isAuth: true
    })),
    logout:() => set(() => ({
        token: "",
        isAuth: false
    })),
    }),
    {
        name: 'auth'
    }
))