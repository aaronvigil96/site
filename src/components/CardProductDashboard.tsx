import { LuFeather } from "react-icons/lu";
import { Product } from "../interface/product.interface";
import { useEffect, useState } from "react";
import axios from "../libs/axios";
import { useNavigate } from "react-router";

type Category = {
    id: number;
    name: string;
    isActive: boolean;
}

const CardProductDashboard = ({id, name, quantity, price, img, categoryId}:Product) => {

    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState({name, quantity, price, img, categoryId});
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProduct({...product, [e.target.name]:e.target.value});
    }

    const fetchingCategories = async () => {
        const data = await axios.get('/categories');

        const category:Category = data.data.find((e:Category) => {
            if(e.id === id){
                return e;
            }
        });

        setCategory(category.name);
        setCategories(data.data);
    }

    useEffect(() => {
        fetchingCategories();
    },[]);

    const navigate = useNavigate();

    const updateProduct = async () => {
        try{
            await axios.patch(`/products/${id}`, {
                name: product.name,
                price: Number(product.price),
                quantity: Number(product.quantity),
                img: product.img,
                categoryId: Number(product.categoryId)
            });
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={`bg-secondary p-4 rounded-sm text-primary flex ${isEditing ? "flex-col" : ""} items-center gap-4`}>
            <div>
                <h2>
                    Producto: {
                    isEditing 
                    ?
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={product.name}
                        className="border p-1 rounded text-black"
                    />
                    :
                    <span className="font-black uppercase">{name}</span>
                }
                </h2>
                <p>Cantidad: {
                    isEditing 
                    ?
                    <input 
                        type="number"
                        name="quantity"
                        onChange={handleChange}
                        value={product.quantity}
                        className="border p-1 rounded text-black"
                    />
                    :
                    <span className="font-black uppercase">{quantity}</span>
                    }
                </p>
                <p>Precio: {
                    isEditing 
                    ?
                    <input 
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={product.price}
                        className="border p-1 rounded text-black"
                    />
                    :
                    <span className="font-black uppercase">{price}</span>
                    }
                </p>
                <p>Imagen: {
                    isEditing 
                    ?
                    <input 
                        type="text"
                        name="img"
                        onChange={handleChange}
                        value={product.img}
                        className="border p-1 rounded text-black"
                    />
                    :
                    <span className="font-black uppercase">{img}</span>
                    }</p>
                    <p>Categoria: {
                        isEditing 
                        ?
                            <select 
                                onChange={handleChange}
                                name="categoryId"
                                className="border p-1 rounded text-black"
                            >
                                {
                                    categories?.map(({id, name}:Category) => (<option key={id} value={id}>{name}</option>))
                                }
                            </select>
                        :
                        <span className="font-black uppercase">{category}</span>
                    }</p>
            </div>
            {
                isEditing 
                ? 
                <div className="flex w-full justify-between gap-2">
                    <button onClick={updateProduct} className="cursor-pointer bg-primary p-2 rounded-md text-green-700 basis-1/2 hover:text-white transition-colors duration-300 ease-in-out">Confirmar</button>
                    <button onClick={() => setIsEditing(false)} className="cursor-pointer bg-primary p-2 rounded-md text-red-500 basis-1/2 hover:text-white transition-colors duration-300 ease-in-out">Cancelar</button>
                </div>
                :
                <div onClick={() => setIsEditing(true)} className="p-2 rounded-full bg-slate-700 max-w-max cursor-pointer hover:bg-primary group transition-colors duration-300 ease-in-out">
                    <LuFeather className=" text-secondary text-xl group-hover:text-white transition-colors duration-300 ease-in-out"/>
                </div>
            }
            
        </div>
    )
}

export default CardProductDashboard;