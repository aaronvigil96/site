import { useState } from "react";
import Menu from "./Menu";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="w-full px-4 py-2 text-white">
            <header className="max-w-3xl mx-auto flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Logo</h2>
                </div>
                <div className="flex">
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>
                </div>
                <div className={`fixed top-0 right-0 h-full w-full bg-white ${isOpen ? "translate-x-0" : "translate-x-full"} md:w-xl transition-transform duration-300 ease-in-out`}>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer fixed right-4 top-2 text-black"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
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