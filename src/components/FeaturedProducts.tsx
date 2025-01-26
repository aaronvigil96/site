import CardProduct from "./CardProduct"

const FeaturedProducts = () => {

    return(
        <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white">Productos destacados</h2>
            <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center mt-2">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </section>
    )
}
export default FeaturedProducts