import React from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export const Lobby = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
