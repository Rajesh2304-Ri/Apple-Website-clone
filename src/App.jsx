import Topbar from "./components/Top"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Macbook from "./components/Hero1"
import FirstDivision from "./components/Division1"
import SecondDivision from "./components/Division2"
import Footer from "./components/Footer"
import Nav from "./components/Navbar1"
function App() {
  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 z-40 backdrop-blur-sm bg-white/95  ">
      <Topbar />
      <Navbar />
      </div>
      <Nav/>
      <Header />
      <Hero />
      <Macbook />
      <FirstDivision/>
      <SecondDivision/>
      <Footer/>
    </div>
  )
}

export default App
