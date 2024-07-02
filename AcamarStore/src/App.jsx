import Banner from "./components/Banner"
import BannerPromo1 from "./components/BannerPromo1"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import PromocionEnvios from "./components/PromocionEnvio"

function App() {

  return (
    <>
     <PromocionEnvios />
     <NavBar />
     <Banner />
     <ItemListContainer texto={"PRODUCTOS AGOTADOS"} />
     <BannerPromo1 />
     <Footer />
    </>
  )
}

export default App
