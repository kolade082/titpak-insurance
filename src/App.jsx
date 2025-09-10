import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Claims from './pages/Claims'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Leadership from './pages/Leadership'
import GetQuote from './pages/GetQuote'
import AviationInsurance from './pages/AviationInsurance'
import MarineHullCargoInsurance from './pages/MarineHullCargoInsurance'
import OilGasEnergyInsurance from './pages/OilGasEnergyInsurance'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/titpak-insurance/" element={<Home />} />
        <Route path="/titpak-insurance/claims" element={<Claims />} />
        <Route path="/titpak-insurance/contact" element={<Contact />} />
        <Route path="/titpak-insurance/faqs" element={<FAQ />} />
        <Route path="/titpak-insurance/about-us" element={<AboutUs />} />
        <Route path="/titpak-insurance/leadership" element={<Leadership />} />
        <Route path="/titpak-insurance/get-quote" element={<GetQuote />} />
        <Route path="/titpak-insurance/what-we-do/aviation" element={<AviationInsurance />} />
        <Route path="/titpak-insurance/what-we-do/marine-hull-cargo" element={<MarineHullCargoInsurance />} />
        <Route path="/titpak-insurance/what-we-do/oil-gas-energy" element={<OilGasEnergyInsurance />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
