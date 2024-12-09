import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Pdp from '../pages/Pdp';
import Plp from '../pages/Plp'

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='pdp' element={<Pdp />} />
        <Route path='plp' element={<Plp />} />

      </Routes>
    </>
  )
}

export default MainRouter