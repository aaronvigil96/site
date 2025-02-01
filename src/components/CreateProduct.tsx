import { useNavigate } from "react-router";
import axios from "../libs/axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type CreateProduct = {
    name: string;
    price: number;
    quantity: number;
    categoryId: number;
}

type Category = {
    id: number;
    name: string;
    isActive: boolean;
}

const CreateProduct = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors} } = useForm<CreateProduct>();
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchingCategories = async () => {
        const data = await axios.get('/categories');
        setCategories(data.data);
    }


    useEffect(() => {
        fetchingCategories();
    },[]);

    console.log(categories);
        
    const createProduct = async ({name, price, quantity, categoryId}:CreateProduct) => {
        console.log(categoryId);
        try{
            await axios.post('/products', {
                name, price: +price ,quantity: +quantity, img: 'yerba.png', categoryId: +categoryId
            });
            navigate('/');
        }catch(err){
            console.log(err)
        }
    }

    return(
        <form onSubmit={handleSubmit(createProduct)} className="bg-white max-w-max rounded-sm">
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
                <select className="block" {...register('categoryId', {
                    required: 'La categoria es obligatoria'
                })}>
                    {
                        categories?.map(({id, name}:Category) => (<option key={id} value={id}>{name}</option>))
                    }
                </select>
            </div>
            <div className="p-2">
                <button type="submit" className="w-full text-secondary bg-primary p-2 rounded-sm">Crear</button>         
            </div>
        </form>
    )
}

export default CreateProduct;