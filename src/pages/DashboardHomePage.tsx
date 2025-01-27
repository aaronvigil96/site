import CardProductDashboard from "../components/CardProductDashboard";
import { useProductStore } from "../stores/product.store";

export const DashboardHomePage = () => {

    const azucar = useProductStore((state) => state.azucar)

    return(
        <div className="flex">
            <CardProductDashboard name="azucar" quantity={azucar}/>
        </div>
    )
}

export default DashboardHomePage;