import React, { useState } from 'react';
import axios from 'axios';
import { Sidebar } from './Navbar';
import { Outlet } from 'react-router-dom';
import '../styles/Lobby.scss'

export const Lobby = () => {
  const [isSidebarClicked, setIsSidebarClicked] = useState(false);
  
  const token = localStorage.getItem('token');
  const userid = localStorage.getItem('userid');
  const teamid = localStorage.getItem('teamid');
  
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  token; 
    config.headers.userid = userid;
    config.headers.teamid = teamid;
    return config;
  });

  const toggleOutlet = () => {
    setIsSidebarClicked(!isSidebarClicked);
  };

  return (
    <div className='lobby-container'>
      <div className='flex justify-between items-center navbar-container'>
        <img src="/assets/webDetectorLogo.svg" alt="Navbar" className="navbar"/>
        <img src="/assets/codehelpLogo.svg" alt="Navbar" className="navbar"/>
      </div>
      <div className='item-container'>
        <div className='sidebar-container' onClick={toggleOutlet}>
          <Sidebar/>
        </div>
        <div className='outlet-container'>
          {isSidebarClicked ? <AnotherDiv /> : <Outlet />}
        </div>
      </div>
    </div>
  )
}

// Define the component for the other div to render when sidebar-container is clicked
const AnotherDiv = () => {
  return (
    <div className="another-div">
      <div className='navbar-element'>
        <a href="/lobby/profile">
          <img src="/assets/Img9.png" alt="Profile" className="images" />
          <span className='text'>Profile</span>
        </a> 
      </div>  

      <div>
        <a href="/lobby">
          <img src="/assets/Img10.png" alt="Questions" className="images" />
          <span className='text'>Questions</span>
        </a>
      </div>

      <div>
        <a href="/lobby/leaderboard">
          <img src="/assets/Img11.png" alt="Leaderboard" className="images" />
          <span className='text'>Leaderboard</span>
        </a>
      </div>
    </div>
  );
}
