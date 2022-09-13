import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainHome from './main_app/pages/MainHome';
import MainAbout from './main_app/pages/MainAbout';
import PageNotFound from './main_app/pages/PageNotFound';
import Calculator from './calculator_app/pages/Calculator'
import CrHome from './crud_app/pages/CrHome';
import CrProtected from './crud_app/components/CrProtected';
import CrCreate from './crud_app/pages/CrCreate';
import CrRead from './crud_app/pages/CrRead';
import CrAbout from './crud_app/pages/CrAbout';
import CrUpdate from './crud_app/pages/CrUpdate';
import CrLogin from './crud_app/pages/CrLogin';
import CrRegister from './crud_app/pages/CrRegister';
import EcomHome from './ecommerce_app/pages/EcomHome'
import EcomProductList from './ecommerce_app/pages/EcomProductList'
import EcomProductSingle from './ecommerce_app/pages/EcomProductSingle'
import EcomCart from './ecommerce_app/pages/EcomCart'
import EcomLogin from './ecommerce_app/pages/EcomLogin'
import EcomRegister from './ecommerce_app/pages/EcomRegister'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/*' element={<PageNotFound />} />
            <Route path='/about' element={<MainAbout />} />


            {/*Calculator App */}
            <Route path='/calculator' element={<Calculator />} />


            {/*Crud App */}
            <Route path='/crud/' element={<CrHome />} />
            <Route path='/crud/*' element={<PageNotFound />} />
            <Route path='/crud/create' element={<CrProtected Component={CrCreate} />} />
            <Route path='/crud/read' element={<CrProtected Component={CrRead} />} />
            <Route path='/crud/about' element={<CrAbout />} />
            <Route path='/crud/update/:id' element={<CrProtected Component={CrUpdate} />} />
            <Route path='/crud/adduser' element={<CrProtected Component={CrCreate} />} />
            <Route path='/crud/login' element={<CrLogin />} />
            <Route path='/crud/register' element={<CrRegister />} />


            {/*Ecommerce App */}
            <Route exact path="/ecom" element={<EcomHome />} />
            <Route exact path="/ecom/*" element={<PageNotFound />} />
            <Route path="/ecom/products" element={<EcomProductList />} />
            <Route path="/ecom/products/:category" element={<EcomProductList />} />
            <Route path="/ecom/product/:id" element={<EcomProductSingle />} />
            <Route path="/ecom/cart" element={<EcomCart />} />
            <Route path="/ecom/login" element={<EcomLogin />} />
            <Route path="/ecom/register" element={<EcomRegister />} />
        </Routes>
    )
}

export default Routers