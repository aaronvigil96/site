import { useNavigate } from "react-router";
import axios from "../libs/axios";
import { useForm } from "react-hook-form";

type CreateProduct = {
    name: string;
    price: number;
    quantity: number;
}

const CreateProduct = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm<CreateProduct>();

    const createProduct = async ({name, price, quantity}:CreateProduct) => {
        try{
            const data = await axios.post('/products', {
                name, price: +price ,quantity: +quantity, img: 'yerba.png'
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
                <label htmlFor="price" className="block">Precio</label>
                <input type="number" id="price" className="border rounded-sm pl-2" placeholder="1200" {...register('price', {
                    required: 'El precio es obligatorio'
                })}/>
                {errors.price && <p className="text-red-500">{errors.price?.message?.toString()}</p>}
                <label htmlFor="quantity" className="block">Cantidad</label>
                <input type="number" id="quantity" className="border rounded-sm pl-2" placeholder="11" {...register('quantity', {
                    required: 'La cantidad es obligatoria'
                })}/>
                {errors.quantity && <p className="text-red-500">{errors.quantity?.message?.toString()}</p>}
            </div>
            <div className="p-2">
                <button type="submit" className="w-full text-secondary bg-primary p-2 rounded-sm">Crear</button>         
            </div>
        </form>
    )
}

export default CreateProduct;