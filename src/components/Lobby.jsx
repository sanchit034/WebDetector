import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import '../styles/Lobby.scss'

export const Lobby = () => {
  return (
    <div className='lobby-container'>
      <img src="assets/Img1.png" alt=""  className="background"/>
      <div>
        <img src="/assets/Img3.png" alt="Navbar" className="navbar"/>
      </div>
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
