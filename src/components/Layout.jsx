import React from 'react'
import {Route, Routes } from 'react-router-dom'
import AboutUs from '../Pages/About';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Footer from './Footer';
import Header from './Header';
import MenuCard from './MenuCard';
import MenuDishes from './MenuDishes';


function Layout() {

  return (
        <div>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/menu' element={<MenuCard/>}/>
            <Route exact path='/about' element={<AboutUs/>}/>
            <Route exact path='/contact' element={<Footer/>}/>
            <Route exact path='cart' element={<Cart/>}/>

        </Routes>
        {/* <Footer/> */}
        
        </div>
      

  )
}

export default Layout