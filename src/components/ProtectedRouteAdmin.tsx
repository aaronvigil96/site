import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/auth.store"

const ProtectedRouteAdmin = () => {

    const role = useAuthStore.getState().role;

    if(role !== "ADMIN") return <Navigate to={'/dashboard/home'} replace/>
    return <Outlet/>
}

export default ProtectedRouteAdmin;