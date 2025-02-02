import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    token: string | null;
    isAuth: boolean;
    role: string | null;
    setToken:(tokenValue:string) => void;
    logout:() => void;
}

interface JwtPayloadCustom {
    id: number;
    exp: number;
    iat: number;
    role: string;
}

export const useAuthStore = create(persist<AuthState>(
    (set) => ({
    token: null,
    isAuth: false,
    role: null,
    setToken:(tokenValue) => {
        try{
            const decode = jwtDecode<JwtPayloadCustom>(tokenValue);
            set(() => ({
                token: tokenValue,
                isAuth: true,
                role: decode.role
            }))
        }catch(err){
            set(() => ({
                token: null,
                isAuth: false,
                role: null
            }))
        }
    },
    logout:() => set(() => ({
        token: "",
        isAuth: false
    })),
    }),
    {
        name: 'auth'
    }
))