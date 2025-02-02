import { useForm } from "react-hook-form";
import Header from "../components/Header"
import { useAuthStore } from "../stores/auth.store";
import axios from "../libs/axios";
import { useNavigate } from "react-router";

type RegisterUser = {
    email: string;
    password: string;
}

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterUser>();
    const setToken = useAuthStore.getState().setToken;
    const navigate = useNavigate();

    const registerUser = async ({email, password}:RegisterUser) => {
        try{
            const resp = await axios.post('/auth/register', {
                email, password
            });
            setToken(resp.data.token);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <Header/>
        <div className="bg-primary p-2">
            <h2 className="text-white text-center text-3xl mb-2">Registro</h2>
            <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-2 max-w-max mx-auto p-4 bg-white rounded-sm">
                <div>
                    <label className="block" htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', {
                        required: 'El correo es obligatorio'
                    })}/>
                    {errors.email && <p className="text-red-500">{errors.email?.message?.toString()}</p>}
                </div>
                <div>
                    <label className="block" htmlFor="password">Contraseña</label>
                    <input type="password" id="password" {...register('password', {
                        required: 'La contraseña es obligatoria'
                    })}/>
                    {errors.password && <p className="text-red-500">{errors.password?.message?.toString()}</p>}
                </div>
                <button type="submit" className="text-secondary bg-black w-full p-2 rounded-md">Envíar</button>
            </form>
        </div>
        </>
    )
}

export default RegisterPage;