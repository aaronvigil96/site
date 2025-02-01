import { useEffect, useState } from "react";
import axios from "../libs/axios";

type Category = {
    id: number;
    name: string;
}

const Menu = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [categories, setCategories] = useState<Category[]>([]);

    const toggleActive = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    const fetchingCategories = async () => {
        const data = await axios.get('/categories');
        setCategories(data.data);
    }

    useEffect(() => {
        fetchingCategories();
    },[]);

    console.log(categories);

    return (
        <div className="flex flex-col gap-4 font-[Roboto]">
            {
                categories.map(({name, id}) => (
                    <div key={id} className="border-b border-gray-200 font-black w-full">
                        <div className="flex justify-between items-center">
                            <h2 className="uppercase text-secondary text-xl font-bold">{name}</h2>
                            <svg onClick={() => toggleActive(id)} className={`cursor-pointer text-secondary ${activeIndex === id ? "rotate-90" : ""} transition-transform duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"/></svg>
                        </div>
                        <ul className={`pl-4 flex flex-col gap-2 ${activeIndex === id ? "block" : "hidden"}`}>
                            {/*
                                item.options.map((subitem, idx) => (
                                    <li key={idx} className="uppercase cursor-pointer max-w-max text-white">
                                        {subitem}
                                    </li>
                                ))
                            */}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;