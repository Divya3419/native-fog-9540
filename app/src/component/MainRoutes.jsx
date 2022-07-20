import React, { startTransition } from 'react'
import { Routes, Route } from 'react-router-dom'
import Abel from '../Pages/Abel'
import BabyFoot from '../Pages/BabyFoot'
import Brands from '../Pages/Brands'
import Caudalie from '../Pages/Caudalie'
import Navbar from './Navbar'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Brands/>}/>
            <Route path="/abel" element={<Abel/>}/>
            <Route path="/babyfoot" element={<BabyFoot/>}/>
            <Route path="/caudalie" element={<Caudalie/>}/>
            <Route path="/nav" element={<Navbar/>}/>
        </Routes>
            
    </div>
  )
}

export default MainRoutes
