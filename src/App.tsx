import FeaturedProducts from "./components/FeaturedProducts"
import Header from "./components/Header"

function App() {

  return (
    <>
      <p className="bg-black py-2 text-white text-center font-thin"><span className="font-bold uppercase">Envios gratis</span> en compras mayores a $10.000</p>
      <Header/>
      <FeaturedProducts/>
    </>
  )
}

export default App
