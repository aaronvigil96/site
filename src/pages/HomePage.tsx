import { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import { Product } from "../interface/product.interface";

const HomePage = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const populateProducts = async () => {
        const data = await fetch('http://localhost:3000/products');
        setProducts(await data.json());
    }

    useEffect(() => {
        populateProducts();
    },[]);

    return(
        <>
            <p className="bg-white py-1 text-center"><span className="font-bold uppercase">envios gratis</span> en compras mayores a $10.000</p>
            <Header/>

            <section className="flex flex-wrap md:flex-nowrap my-2 items-center p-4 mx-auto bg-primary">
                <div className="text-white md:basis-1/2">
                    <h2 className="text-5xl font-bold uppercase">El <span className="text-secondary">supermercado digital</span> más importante de la ciudad</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil maxime voluptatem pariatur obcaecati quia ipsam nemo ducimus, quas impedit.</p>
                </div>
                <div className="md:basis-1/2">
                    <img className="w-full" src="supermarket.jpg"/>
                </div>
            </section>

            <div>
                <FeaturedProducts products={products}/>
            </div>
        </>
    )
}

export default HomePage;