import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Login } from "./home/Login";
import { Landing } from './home/Landing';
import { Outlet } from 'react-router-dom';

export const Home = () => {
 
  return (
    <div className='home'>
      <div className='outlet-container'>
        <Outlet/>
      </div>
    </div>
  )
}
