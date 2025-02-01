import { useNavigate } from "react-router";
import axios from "../libs/axios";
import { useForm } from "react-hook-form";

type CreateCategory = {
    name: string;
}

const CreateCategory = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm<CreateCategory>();

    const createProduct = async ({name}:CreateCategory) => {
        try{
            await axios.post('/categories', {
                name
            });
            navigate('/');
        }catch(err){
            console.log(err)
        }
    }

    return(
        <form onClick={handleSubmit(createProduct)} className="bg-white max-w-max rounded-sm">
            <div className="p-2">
                <label htmlFor="name" className="block">Nombre</label>
                <input id="name" className="border rounded-sm pl-2" placeholder="azucar" {...register('name', {
                    required: 'El nombre es obligatorio'
                })}/>
                {errors.name && <p className="text-red-500">{errors.name?.message?.toString()}</p>}
            </div>
            <div className="p-2">
                <button type="submit" className="w-full text-secondary bg-primary p-2 rounded-sm">Crear</button>         
            </div>
        </form>
    )
}

export default CreateCategory;