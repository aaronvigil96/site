import { Product } from "../interface/product.interface";
import { useProductStore } from "../stores/product.store";

const CardProductDashboard = ({name, quantity}:Product) => {

    const populateAzucar = useProductStore(state => state.increasePopulation);

    return (
        <div className="bg-secondary p-4 rounded-sm text-primary flex flex-col justify-center">
            <h2>Producto: <span className="font-black uppercase">{name}</span></h2>
            <p>Cantidad: <span className="uppercase font-black">{quantity}</span></p>
            <div className="flex gap-2">
                <button className="basis-1/2 bg-primary text-white rounded-sm p-2" onClick={() => populateAzucar(1)}>Agregar</button>
                {
                    quantity <= 0 ? <button disabled className="basis-1/2 bg-primary text-white rounded-sm p-2" onClick={() => populateAzucar(-1)}>Quitar</button> : <button className="basis-1/2 bg-primary text-white rounded-sm p-2" onClick={() => populateAzucar(-1)}>Quitar</button>
                }
                
            </div>
        </div>
    )
}

export default CardProductDashboard;