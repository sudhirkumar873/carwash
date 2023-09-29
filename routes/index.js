import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
// import contactus from '../pages/Contact';
import Contactus from '../pages/Contact';
import RegisterPage from '../pages/Mobile';
import Guest1 from '../pages/Guestpage1';

const Index = () => {
  return (
    <>
        
        <Routes>
        {/* ===========Guest Routing=============== */}
        <Route path="/" element={<Contactus />} />
        <Route path="/mobile" element={<RegisterPage />}/>
        <Route path='/guestpage' element={<Guest1 />}/>
        </Routes>
    </>
  )
}

export default Index