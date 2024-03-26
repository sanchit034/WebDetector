import React from 'react'
import '../../styles/Leaderboard.scss'

export const Leaderboard = () => {
  return (
    <div className='container'>
      <img src="/assets/Img1.png" alt="Background" className='background'/>
      <div className='leaderboard-container'>
        <div><img src="/assets/Img14.png" alt="Leaderboard_Image" className='leaderboard-img'/></div>
        <div className='leaderboard'></div>
      </div>
    </div>
  )
}
