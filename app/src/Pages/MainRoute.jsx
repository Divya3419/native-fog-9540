import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AddressDetails from '../component/AddressDetails'
import Cart from '../component/Cart'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import PaymentPage from '../component/PaymentPage'
import Success from '../component/Success'
import Abel from './Abel'
import BabyFoot from './BabyFoot'
import Brands from './Brands'
import Caudalie from './Caudalie'
import Home from './Home'
import Location from './Location'
import NewProducts from './NewProducts'





const MainRoute = () => {
  const location = useLocation() 
  return (
    <>


    { 
      location.pathname === "/Success" ? null : (
        <Navbar />
      )}
    
    <Routes>


      

        <Route path='/' element={<Home/>} />
       
        
    <Route path="/location" element={<Location/>}/>
    <Route path="/abel" element={<Abel/>}/>
    <Route path="/babyfoot" element={<BabyFoot/>}/>
    <Route path="/caudalie" element={<Caudalie/>}/>
    <Route path="/brands" element={<Brands/>}/>
    
    <Route path="/Success" element={<Success/>}/>
    <Route path="/NewProducts" element={<NewProducts/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/AddressDetails" element={<AddressDetails/>}/>
    <Route path="/PaymentPage" element={<PaymentPage/>}/>
   

    </Routes>

    {
      location.pathname === "/PaymentPage" ||
      location.pathname === "/Success" ? null : (
        <>
          

    <Footer/>
    </>

   ) }
    
    
    </>
  )
}
export default MainRoute