import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../stores/auth.store";

const ProtectedRoute = () => {

    const isAuth = useAuthStore.getState().isAuth;

    if(!isAuth) return <Navigate to={'/'} replace/>;
    return <Outlet/>
}

export default ProtectedRoute;