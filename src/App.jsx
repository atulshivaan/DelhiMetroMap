
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import Help from './pages/Help'
import Navbar from './component/Navbar'


import Map from './pages/Map'

function App() {


  return (
    <>
    <Navbar/>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/map" element={<Map />} />
    <Route path="/help" element={<Help />} />
  </Routes>
    </>
   
  )
}

export default App
