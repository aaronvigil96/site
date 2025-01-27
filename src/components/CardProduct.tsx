const CardProduct = ({product}) => {
    return(
        <div className="flex flex-col w-72 bg-gray-100 p-4 group cursor-pointer rounded-sm hover:bg-gray-300  transition-colors duration-300 ease-in-out">
            <div className="flex-[3]">
                <img className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" src={product.image}/>
            </div>
            <div className="flex-[1]">
                <div>
                    <p className="uppercase font-black text-black">{product.name}</p>
                    <p className="font-semibold">${product.price}</p>
                    <p className="uppercase">{product.category}</p>
                </div>
                <button className="w-full cursor-pointer font-bold uppercase text-center bg-primary text-secondary hover:text-black hover:bg-secondary py-2 rounded-md transition-colors duration-300 ease-linear">Agregar</button>
            </div>
        </div>
    )
}

export default CardProduct;