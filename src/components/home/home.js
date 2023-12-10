import React from 'react';
// import CarouselComponent from '../carousal/Carousal';
import { FaClipboardCheck, FaHandsHelping, FaRobot } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-32 mx-auto w-fit'>
    <div className='flex flex-col items-center justify-center text-white text-2xl'>
      <FaHandsHelping size={40}/><span>How can we help you?</span>
    </div>
    <div className='flex flex-col md:flex-row gap-10'>
      <div onClick={() => navigate('/query') } className='flex items-center gap-3 justify-center p-10 h-[170px] w-[320px] text-2xl text-black bg-white rounded-2xl cursor-pointer'> <FaRobot size={32}/><span>Query</span></div>
      <div onClick={() => navigate('/results') } className='flex items-center justify-center p-10 h-[170px] w-[320px] text-2xl text-black bg-white rounded-2xl gap-3 cursor-pointer'><FaClipboardCheck size={28}/><span>Get Result</span></div>
    </div>
    </div>
  );
}

export default Home;
