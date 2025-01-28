import { Product } from "../interface/product.interface";
import CardProduct from "./CardProduct"

interface FeaturedProductsProps {
    products: Product[]
}

const FeaturedProducts:React.FC<FeaturedProductsProps> = ({products}) => {

    return(
        <section className="max-w-3xl mx-auto">
            <div className="max-w-max rounded-sm">
                <h2 className="text-3xl font-semibold text-white uppercase">Productos destacados</h2>
                <hr className="border-secondary"/>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center mt-2">
                {
                    products?.map((product) => (<CardProduct key={product.id} id={product.id} name={product.name} img={product.img} price={product.price} quantity={product.quantity}/>))
                }
            </div>
        </section>
    )
}
export default FeaturedProducts