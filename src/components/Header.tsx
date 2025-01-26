import { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

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
                    <Link to={'/dashboard'} className="hover:text-secondary transition-colors duration-300 ease-in-out">
                        <LuLayoutDashboard className="text-3xl" />
                    </Link>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>
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