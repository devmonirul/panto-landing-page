
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Shop from './pages/shop/Shop.jsx'
import Contact from './pages/contact/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { CartProvider } from './context/CartContext.jsx'




function App() {

  return (
    <ThemeProvider>
      <CartProvider>
      <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer/>

      </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
