import React from 'react';
import "../styles/Home.scss";

export const About = () => {
  return (
    <div className='about-container'>
        <div className="heading-container">
          About
        </div>
        <div className="about-content-container">
          <div className="about-content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about-card-container">
            <div className="about-card about-card-3"><img src="assets/about/image3.png" alt="" /></div>
            <div className="about-card about-card-1"><img src="assets/about/image1.png" alt="" /></div>
            <div className="about-card about-card-2"><img src="assets/about/image2.png" alt="" /></div>
            <div className="about-card about-card-4"><img src="assets/about/image4.png" alt="" /></div>
            <div className="about-card about-card-4"><img src="assets/about/image4.png" alt="" /></div>
          </div>
        </div>
        <div className="about-footer">
          <div className="web-detector-text"><div>Web Detector</div> <p>@2024</p></div>
          <div className="contact-details">
            <div className="insta"><a href="https://www.instagram.com/webdetector"><img src="assets/instaIcon.svg" alt="" /></a></div>
            <div className="email"><a href="mailto:webdetectorr@gmail.com"><img src="assets/mailIcon.svg" alt="" /></a></div>
          </div>
        </div>
    </div>
  )
}