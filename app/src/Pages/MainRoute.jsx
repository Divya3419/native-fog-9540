import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Location from './Location'

const MainRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path="/location" element={<Location/>}/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default MainRoute