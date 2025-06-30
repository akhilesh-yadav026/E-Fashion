import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App