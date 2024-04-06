import React from 'react'
import '../../styles/Profile.scss'

export const Profile = () => {
  return (
    <div className='large-container'>
      <div>
        <div className='user-container'><img src="/assets/Img15.png" alt="" /></div>
      </div>
      <div className="box-parent-container">
        <div className='box-container'>
          <div className='input-field'>
            <div className='text'>Team Name</div>
            <div className='details'>{localStorage.getItem("teamName")}</div>
            {/* <div><input type="text" className='input-box'/></div> */}
          </div>
          <div className='input-field'>
            <div className='text'>Your Name</div>
            <div className='details'>{localStorage.getItem("username")}</div>
            {/* <div><input type="text" className='input-box'/></div> */}
          </div>
        </div>
        <div className='box-container'>
          <div className='input-field'>
            <div className='text'>Email</div>
            <div className='details'>{localStorage.getItem("email")}</div>
            {/* <div><input type="text" className='input-box'/></div> */}
          </div>
          <div className='input-field'>
            <div className='text'>Contact Number</div>
            <div className='details'>{localStorage.getItem("mobileNumber")}</div>
            {/* <div><input type="text" className='input-box'/></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
