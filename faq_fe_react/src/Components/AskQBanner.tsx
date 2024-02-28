import React from 'react'
import Qphoto from "Assets/Images/Qbanner.jpg";
import { Navigate, useNavigate } from "react-router-dom";


function AskQBanner() {
  const handleAskQ = () => {
    Navigate('/askquestion');
  }
  const Navigate = useNavigate();
  return (
    <div className='relative'>
      <img
        src={Qphoto}  
        alt="Banner"
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white">Any Tech Question?</h1>
        <br/>
        <h1 className="text-4xl font-bold text-white">Find your answer</h1>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleAskQ}>Click here</button>
      </div>
    </div> 
  )
}

export default AskQBanner;