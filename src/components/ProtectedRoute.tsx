import { Navigate, Outlet } from "react-router"

interface ProtectedRouteProps {
    isAuth: boolean;
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({isAuth}) => {
    if(!isAuth) return <Navigate to={'/'} replace/>;
    return <Outlet/>
}

export default ProtectedRoute;