import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Claims from './pages/Claims'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/titpak-insurance/" element={<Home />} />
        <Route path="/titpak-insurance/claims" element={<Claims />} />
        <Route path="/titpak-insurance/contact" element={<Contact />} />
        <Route path="/titpak-insurance/faqs" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
