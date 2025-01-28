import { useEffect, useState } from "react";
import CardProductDashboard from "../components/CardProductDashboard";
import { Product } from "../interface/product.interface";

export const DashboardHomePage = () => {
    
    const [products, setProducts] = useState([]);

    const populateProducts = async () => {
        const data = await fetch('http://localhost:3000/products');
        setProducts(await data.json());
    }

    useEffect(() => {
        populateProducts();
    },[]);


    return(
        <div className="flex flex-wrap gap-2">
            {
                products?.map((product:Product) => (<CardProductDashboard key={product.id} name={product.name} quantity={product.quantity}/>))
            }
        </div>
    )
}

export default DashboardHomePage;