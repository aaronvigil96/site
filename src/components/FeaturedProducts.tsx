import CardProduct from "./CardProduct"

const FeaturedProducts = () => {

    const products = [
        {image: 'azucar.png', name: 'azucar', price:1200, category: 'mercaderia'},
        {image: 'yerba.png', name: 'yerba', price:1500, category: 'mercaderia'},
        {image: 'leche.png', name: 'leche', price: 1300, category: 'mercaderia'}
    ]

    return(
        <section className="max-w-3xl mx-auto">
            <div className="max-w-max rounded-sm">
                <h2 className="text-3xl font-semibold text-white uppercase">Productos destacados</h2>
                <hr className="border-secondary"/>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center mt-2">
                {
                    products?.map((product,index) => (<CardProduct key={index} product={product}/>))
                }
            </div>
        </section>
    )
}
export default FeaturedProducts