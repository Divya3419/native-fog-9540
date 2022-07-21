import React from 'react'


import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Abel from './Abel'
import BabyFoot from './BabyFoot'
import Brands from './Brands'
import Caudalie from './Caudalie'
import Location from './Location'

const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path="/location" element={<Location/>}/>
        <Route path="/" element={<Brands/>}/>
            <Route path="/abel" element={<Abel/>}/>
            <Route path="/babyfoot" element={<BabyFoot/>}/>
            <Route path="/caudalie" element={<Caudalie/>}/>
    </Routes>
    </>
  )
}

export default MainRoute

