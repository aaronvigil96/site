import { Product } from "../interface/product.interface";

const CardProductDashboard = ({name, quantity}:Product) => {
    return (
        <div className="bg-secondary p-4 rounded-sm text-primary flex flex-col justify-center">
            <h2>Producto: <span className="font-black uppercase">{name}</span></h2>
            <p>Cantidad: <span className="uppercase font-black">{quantity}</span></p>
        </div>
    )
}

export default CardProductDashboard;