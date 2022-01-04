import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Topbar from '../components/Topbar'

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
