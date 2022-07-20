import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Abel from './Abel'
import BabyFoot from './BabyFoot'
import Brands from './Brands'
import Caudalie from './Caudalie'
import SlidingText from '../component/SlidingText'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Brands/>}/>
            <Route path="/abel" element={<Abel/>}/>
            <Route path="/babyfoot" element={<BabyFoot/>}/>
            <Route path="/caudalie" element={<Caudalie/>}/>
            <Route path="/slidingtext" element={<SlidingText/>}/>
        </Routes>
            
    </div>
  )
}

export default MainRoutes
