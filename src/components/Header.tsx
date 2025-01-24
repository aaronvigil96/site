import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleSubmenu = () => {
        setIsOpenSubMenu(!isOpenSubMenu);
        console.log('click')
    }

    console.log(isOpenSubMenu);

    return(
        <div className="w-full px-4 py-2">
            <header className="max-w-3xl mx-auto flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Logo</h2>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>
                </div>
                <div className={`fixed top-0 right-0 h-full w-full bg-white ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="cursor-pointer fixed right-4 top-2"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                    <div className="fixed top-14 left-6 w-full pr-14 font-[Titillium]">
                        <div className="border-b border-gray-200 font-black w-full">
                            <div className="flex justify-between items-center mb-[16px]">
                                <h2 className="uppercase text-red-800 text-xl font-bold">Libreria</h2>
                                <svg onClick={toggleSubmenu} className={`text-red-800 ${isOpenSubMenu ? "rotate-90" : ""} transition-transform duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>
                            </div>
                            <ul className={`${isOpenSubMenu ? "flex flex-col gap-4 font-thin pl-4" : "hidden"}`}>
                                <li className="uppercase">lapicera</li>
                                <li className="uppercase">fibron</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;