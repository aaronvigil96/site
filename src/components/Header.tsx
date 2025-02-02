import { useState } from "react";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router";
import { LuAlignJustify, LuLayoutDashboard } from "react-icons/lu";
import { useAuthStore } from "../stores/auth.store";

const Header = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const isAuth = useAuthStore().isAuth;
    const logout = useAuthStore().logout;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="w-full px-4 py-2 text-white">
            <header className="max-w-3xl mx-auto flex items-center justify-between">
                <Link to={'/'} className="hover:text-secondary transition-colors duration-300 ease-in-out">
                    <div>
                        <h2 className="text-3xl font-bold">3 Digitos</h2>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    {
                        isAuth 
                        ?
                        <>
                            <button onClick={() => {logout()}} className="p-2 bg-primary border border-white rounded-sm hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out">Cerrar sesión</button>
                            <Link to={'/dashboard'} className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                <LuLayoutDashboard className="text-3xl" />
                            </Link>
                        </>
                        :
                        <div className="flex gap-2">
                            <button onClick={() => {navigate('/login')}} className="p-2 bg-primary border border-white rounded-sm hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out">Iniciar sesión</button>
                            <button onClick={() => {navigate('/register')}} className="p-2 bg-primary border border-white rounded-sm hover:text-secondary cursor-pointer transition-colors duration-300 ease-in-out">Registrarse</button>

                        </div>
                    }
                    
                    <LuAlignJustify onClick={toggleMenu} className="text-3xl cursor-pointer hover:text-secondary transition-colors duration-300 ease-in-out"/>
                </div>
                <div className={`fixed top-0 right-0 h-full w-full bg-primary ${isOpen ? "translate-x-0" : "translate-x-full"} md:w-xl transition-transform duration-300 ease-in-out`}>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer fixed right-4 top-2 text-white"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                    <div className="fixed top-14 left-6 w-full pr-14 font-[Titillium]">
                        <div className="border-b border-gray-200 font-black w-full">
                            <Menu/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;