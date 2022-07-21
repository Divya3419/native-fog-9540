import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Abel from './Abel'
import BabyFoot from './BabyFoot'
import Brands from './Brands'
import Caudalie from './Caudalie'
import Home from './Home'
import Location from './Location'
import NewProducts from './NewProducts'





const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/location" element={<Location/>}/>
    <Route path="/abel" element={<Abel/>}/>
    <Route path="/babyfoot" element={<BabyFoot/>}/>

    <Route path="/caudalie" element={<Caudalie/>}/>
          
    <Route path="/brands" element={<Brands/>}/>
            
    <Route path='/' element={<Home/>} />
  
    <Route path="/NewProducts" element={<NewProducts/>}/>
            
    </Routes>
    </>
  )
}

export default MainRoute