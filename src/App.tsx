import FeaturedProducts from "./components/FeaturedProducts"
import Header from "./components/Header"

function App() {

  return (
    <>
      <p className="bg-white py-1 text-center"><span className="font-bold uppercase">envios gratis</span> en compras mayores a $10.000</p>
      <Header/>
      <FeaturedProducts/>
    </>
  )
}

export default App
