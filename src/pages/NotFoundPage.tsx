import Header from "../components/Header"

const NotFoundPage = () => {
    return (
        <div>
            <Header/>
            <div>
                <h2 className="text-white text-4xl text-center mt-20">Ups, estás intenta acceder a una página que no existe</h2>
            </div>
        </div>
    )
}

export default NotFoundPage;