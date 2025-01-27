export interface Product {
    image: string;
    name: string;
    price: number;
    category: string;
    quantity: number;
}

const CardProduct = ({image, name, price, category, quantity}:Product) => {
    return(
        <div className={`flex flex-col w-72 bg-gray-100 p-4 ${quantity ? "group cursor-pointer rounded-sm hover:bg-gray-300  transition-colors duration-300 ease-in-out" : "bg-slate-500"}`}>
            <div className="flex-[3]">
                <img className={`object-cover ${quantity ? "group-hover:scale-110 transition-transform duration-300 ease-in-out" : ""}`} src={image}/>
            </div>
            <div className="flex-[1] flex flex-col gap-2">
                <div>
                    <p className="uppercase font-black text-black">{name}</p>
                    <p className="font-semibold">${price}</p>
                    <p className="uppercase">{category}</p>
                    <p>Cantidad: <span className="font-black">{quantity}</span></p>
                </div>
                {
                    quantity
                    ? 
                    <button className="w-full cursor-pointer font-bold uppercase text-center bg-primary text-secondary hover:text-black hover:bg-secondary py-2 rounded-md transition-colors duration-300 ease-linear">Agregar</button>
                    :
                    <button className="w-full font-bold uppercase text-center bg-primary text-secondary py-2 rounded-md transition-colors duration-300 ease-linear">Sin stock</button>
                }
            </div>
        </div>
    )
}

export default CardProduct;