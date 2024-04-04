import React from 'react';
import axios from 'axios';
import { Sidebar } from './Navbar';
import { Outlet } from 'react-router-dom';
import '../styles/Lobby.scss'

export const Lobby = () => {
  const token = localStorage.getItem('token');
  const userid = localStorage.getItem('userid');
  const teamid = localStorage.getItem('teamid');
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  token; 
    config.headers.userid = userid;
    config.headers.teamid = teamid;
    return config;
  });

  return (
    <div className='lobby-container'>
      <div className='flex justify-between items-center navbar-container'>
        <img src="/assets/webDetectorLogo.svg" alt="Navbar" className="navbar"/>
        <img src="/assets/codehelpLogo.svg" alt="Navbar" className="navbar"/>
      </div>
      <div className='item-container'>
        <div className='sidebar-container'>
          <Sidebar/>
        </div>
        <div className='outlet-container'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
