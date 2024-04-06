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
      <div className='content-container'>
        <div className='item-container'>
          <div className='sidebar-container' onClick={toggleOutlet}>
            <Sidebar/>
          </div>
          <div className='outlet-container'>
            {isSidebarClicked ? <AnotherDiv /> : <Outlet />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Define the component for the other div to render when sidebar-container is clicked
const AnotherDiv = () => {
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="another-div">
      <div className='navbar-element'>
        <a href="/lobby/profile">
          <div className='container'>
            <div className='imageContainer'><img src="/assets/Img9.png" alt="Profile" className="images" /></div>
            <div className='textContainer'>Profile</div>
          </div>
        </a> 
      </div>  

      <div className='line'></div>

      <div className='navbar-element'>
        <a href="/lobby">
          <div className='container'>
            <div className='imageContainer'><img src="/assets/Img10.png" alt="Questions" className="images" /></div>
            <div className='textContainer'>Questions</div>
          </div>
        </a>  
      </div>

      <div className='line'></div>

      <div className='navbar-element'>
        <a href="/lobby/leaderboard">
          <div className='container'>
            <div className='imageContainer'><img src="/assets/Img11.png" alt="Leaderboard" className="images" /></div>
            <div className='textContainer'>Leaderboard</div>
          </div>
        </a>
      </div>

      <div className='line'></div>

      <div className='navbar-element'>
        <div className='container'>
          <div className='imageContainer'><button onClick={handleLogout}><img src="/assets/Img12.png" alt="Logout" className="images"/></button></div>
          <div className='textContainer'>Logout</div>
        </div>
      </div>
    </div>
  );
}
