import { useForm } from "react-hook-form";
import Header from "../components/Header";
import axios from "../libs/axios";
import { useAuthStore } from "../stores/auth.store";
import { useNavigate } from "react-router";

type LoginUser = {
    email: string;
    password: string;
}

const LoginPage = () => {

    const setToken = useAuthStore.getState().setToken;
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors} } = useForm<LoginUser>();

    const loginUser = async ({email, password}:LoginUser) => {
        try{
            const resp = await axios.post('/auth/login', {
                email,
                password
            });
            setToken(resp.data.token);
            navigate('/dashboard');
        }catch(err){
            console.log(err);
        }
    }


    return(
        <>
            <Header/>
            <div className="bg-primary p-2">
                <form onSubmit={handleSubmit(loginUser)} className="flex flex-col gap-2 max-w-max mx-auto p-4 bg-white rounded-sm">
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

export default LoginPage;