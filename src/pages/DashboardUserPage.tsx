import { LuDelete } from "react-icons/lu";
import axios from "../libs/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface User {
    id: number;
    email: string;
}


const DashboardUserPage = () => {

    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    const fetchingUsers = async () => {
        const data = await axios.get('/auth/users')
        setUsers(data.data);
    }

    const handleButton = async (id:number) => {
        try{
            await axios.delete(`/auth/users/${id}`)
            navigate('/dashboard/home');
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchingUsers();
    },[]);

    return(
        <div>
            <h1 className="text-white text-2xl">Usuarios</h1>
            {
                users?.map(({id, email}:User) => (
                    <div key={id} className="flex items-center gap-2">
                        <p className="text-white">id: {id} - email: {email}</p>
                        <button onClick={() => handleButton(id)} className="p-2 rounded-full">
                            <LuDelete className="text-2xl text-red-600 cursor-pointer" />
                        </button>
                    </div>
            ))
            }
        </div>
    )
}

export default DashboardUserPage;