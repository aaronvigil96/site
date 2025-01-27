import { useProductStore } from "../stores/product.store"
import CardProduct, { Product } from "./CardProduct"

const FeaturedProducts = () => {

    const azucar = useProductStore((state) => state.azucar);

    const products:Product[] = [
        {image: 'azucar.png', name: 'azucar', price:1200, category: 'mercaderia', quantity: azucar},
        {image: 'yerba.png', name: 'yerba', price:1500, category: 'mercaderia', quantity: 10},
        {image: 'leche.png', name: 'leche', price: 1300, category: 'mercaderia', quantity: 11}
    ]

    return(
        <section className="max-w-3xl mx-auto">
            <div className="max-w-max rounded-sm">
                <h2 className="text-3xl font-semibold text-white uppercase">Productos destacados</h2>
                <hr className="border-secondary"/>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center mt-2">
                {
                    products?.map((product,index) => (<CardProduct key={index} name={product.name} image={product.image} price={product.price} category={product.category} quantity={product.quantity}/>))
                }
            </div>
        </section>
    )
}
export default FeaturedProducts