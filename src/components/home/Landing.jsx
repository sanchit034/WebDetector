import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

export const Landing = ()=> {
  const navigate = useNavigate();
  const containerAnimation = useAnimation();
  const initialAnimation = useAnimation();
  const symbolAnimation = useAnimation();
  const textAnimation = useAnimation();
  const instaAnimation = useAnimation();
  const gmailAnimation = useAnimation();
  const loginAnimation = useAnimation();
  const aboutAnimation = useAnimation();

  function loginStatus() {
    if(localStorage.getItem('userId') ?? "" !== "") {
      window.location.href = '/lobby';
    }
  }
  loginStatus();
  
  useEffect(() => {
    const animatePage = async () => {

      // Animation sequence
      await Promise.all([
        containerAnimation.start({width:'100%', height:'100%'}),
        initialAnimation.start({width:'100%', height:'100%'})
      ]);

      await Promise.all([
        containerAnimation.start({opacity:0.8}, {duration: 1.5}),
        symbolAnimation.start({opacity:1}, {duration: 1.5}),
        initialAnimation.start({width:'50%', height:'50%'}, {duration: 1.5}),
        textAnimation.start({bottom:'45%', opacity:1}, {duration: 1.5})
      ]);

      await containerAnimation.start({ opacity: 1 });

      await Promise.all([
        containerAnimation.start({opacity:0.8}, {duration: 0.5}),
        instaAnimation.start({opacity:1}, {duration: 0.5}),
        gmailAnimation.start({opacity:1}, {duration: 0.5}),
        loginAnimation.start({opacity:1}, {duration: 0.5}),
        aboutAnimation.start({opacity:1}, {duration: 0.5})
      ]);

      await containerAnimation.start({ opacity: 1 });
      
    };

    animatePage();
  }, [
    containerAnimation,
    initialAnimation,
    symbolAnimation,
    textAnimation,
    instaAnimation,
    gmailAnimation,
    loginAnimation,
    aboutAnimation,
    navigate,
  ]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.img
        src="assets/Img1.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '0%', position: 'absolute' }}
        animate={containerAnimation}
      />
      <motion.img
        src="assets/Img2.png"
        alt="Initial"
        style={{ width: '100%', height: '100%',bottom: '0%', position: 'absolute' }}
        animate={initialAnimation}
      />
      <motion.img
        src="assets/Img3.png"
        alt="Navbar"
        style={{ width: '100%', height: '10%', top: '5%', position: 'absolute', opacity: 0 }}
        animate={symbolAnimation}
      />
      <motion.img
        src="assets/Img4.png"
        alt="Text"
        style={{ width: '60%', height: '30%', bottom: '-5%', position: 'absolute', opacity: 0 }}
        animate={textAnimation}
      />
      <a href="https://www.instagram.com/webdetector">
      <motion.img
        src="assets/Img5.svg"
        alt="Text"
        style={{ width: '10%', height: '10%', left:'1%', top:'44%', position: 'absolute', opacity: 0 }}
        animate={instaAnimation}
      />
      </a>
      <a href="mailto:webdetectorr@gmail.com">
      <motion.img
        src="assets/Img6.svg"
        alt="Text"
        style={{ width: '10%', height: '10%', left:'1%', top:'56%', position: 'absolute', opacity: 0 }}
        animate={gmailAnimation}
      />
      </a>
      <a href="/login">
      <motion.img
        src="assets/Img7.png"
        alt="Login Text"
        style={{ width: '17.5%', height: '10%', left:'4%', bottom:'5%', position: 'absolute', opacity: 0 }}
        animate={loginAnimation}
      />
      </a>
      <a href="/about">
      <motion.img
        src="assets/Img8.png"
        alt="About Text"
        style={{ width: '15%', height: '8%', right:'4%', bottom:'6%', position: 'absolute', opacity: 0 }}
        animate={aboutAnimation}
      />
      </a>
    </div>
  );
};    
      