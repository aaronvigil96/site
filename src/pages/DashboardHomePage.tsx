import { useEffect, useState } from "react";
import CardProductDashboard from "../components/CardProductDashboard";
import { Product } from "../interface/product.interface";
import axios from "../libs/axios";

export const DashboardHomePage = () => {
    
    const [products, setProducts] = useState([]);

    const populateProducts = async () => {
        const data = await axios.get('products');
        setProducts(data.data);
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