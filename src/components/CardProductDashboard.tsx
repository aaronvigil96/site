import { LuFeather } from "react-icons/lu";
import { Product } from "../interface/product.interface";
import { useState } from "react";
import axios from "../libs/axios";
import { useNavigate } from "react-router";

const CardProductDashboard = ({id, name, quantity, price, img}:Product) => {

    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState({name, quantity, price, img});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setProduct({...product, [e.target.name]:e.target.value});
    }

    const navigate = useNavigate();

    const updateProduct = async () => {
        try{
            await axios.patch(`/products/${id}`, {
                name: product.name,
                price: Number(product.price),
                quantity: Number(product.quantity),
                img: product.img
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