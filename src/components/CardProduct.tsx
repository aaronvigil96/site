export interface Product {
    image: string;
    name: string;
    price: number;
    category: string;
}

const CardProduct = ({image, name, price, category}:Product) => {
    return(
        <div className="flex flex-col w-72 bg-gray-100 p-4 group cursor-pointer rounded-sm hover:bg-gray-300  transition-colors duration-300 ease-in-out">
            <div className="flex-[3]">
                <img className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" src={image}/>
            </div>
            <div className="flex-[1]">
                <div>
                    <p className="uppercase font-black text-black">{name}</p>
                    <p className="font-semibold">${price}</p>
                    <p className="uppercase">{category}</p>
                </div>
                <button className="w-full cursor-pointer font-bold uppercase text-center bg-primary text-secondary hover:text-black hover:bg-secondary py-2 rounded-md transition-colors duration-300 ease-linear">Agregar</button>
            </div>
        </div>
    )
}

export default CardProduct;