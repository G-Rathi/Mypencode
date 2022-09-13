import React from 'react'
import EcomAnnouncement from '../components/EcomAnnouncement'
import EcomCategories from '../components/EcomCategories'
import EcomFooter from '../components/EcomFooter'
import EcomNavbar from '../components/EcomNavbar'
import EcomNewsLetter from '../components/EcomNewsLetter'
import EcomProducts from '../components/EcomProducts'
import EcomSlider from '../components/EcomSlider'

const EcomHome = () => {

    return (
        <div>

            <EcomNavbar />
            <EcomAnnouncement />
            <EcomSlider />
            <EcomCategories />
            <EcomProducts />
            <EcomNewsLetter />
            <EcomFooter />
        </div>
    )
}

export default EcomHome