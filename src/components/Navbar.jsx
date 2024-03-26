import React from 'react'
import '../styles/Navbar.scss'

export const Navbar = () => {
  return (
    <div className="sidebar">
      <a href="/lobby/profile"><img src="/assets/Img9.png" alt="Profile" className="images" /></a>
      <a href="/lobby"><img src="/assets/Img10.png" alt="Questions" className="images"/></a>
      <a href="/lobby/leaderboard"><img src="/assets/Img11.png" alt="Leaderboard" className="images"/></a>
      <a href="/"><img src="/assets/Img12.png" alt="Logout" className="images"/></a>
    </div>
  )
}
