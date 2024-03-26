import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { Login } from './Login';
import "../../styles/Home.scss";

export const Landing = ()=> {
  const navigate = useNavigate();
  const containerAnimation = useAnimation();
  const loginPageAnimation = useAnimation();
  const aboutPageAnimation = useAnimation();
  const initialAnimation = useAnimation();
  const symbolAnimation = useAnimation();
  const textAnimation = useAnimation();
  const instaAnimation = useAnimation();
  const gmailAnimation = useAnimation();
  const loginAnimation = useAnimation();
  const aboutAnimation = useAnimation();
  const loginContentContainerAnimation = useAnimation();

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
        initialAnimation.start({aspectRatio:'1.7', height:'100%'})
      ]);

      await Promise.all([
        containerAnimation.start({opacity:0.8}, {duration: 1.5}),
        symbolAnimation.start({opacity:1}, {duration: 1.5}),
        initialAnimation.start({aspectRatio:'1.7', height:'50%'}, {duration: 1.5}),
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

  
  const handleLoginClick = async () => {
    await Promise.all([
      //loginPageAnimation.start({left:'100%', opacity:1}, {duration: 0.001}),
      loginContentContainerAnimation.start({left:'100%', opacity:1}, {duration:0.001})
    ])
    await Promise.all([
      //containerAnimation.start({left:'-100%', opacity:1}, {duration: 0.5}),
      //loginPageAnimation.start({left:'0%', opacity:1}, {duration: 0.5}),
      initialAnimation.start({left:'-80%', opacity:1}, {duration: 0.5}),
      textAnimation.start({left:'-80%', opacity:1}, {duration: 0.5}),
      instaAnimation.start({left:'-100%', opacity:1}, {duration: 0.5}),
      gmailAnimation.start({left:'-100%', opacity:1}, {duration: 0.5}),
      loginAnimation.start({left:'-100%', opacity:1}, {duration: 0.5}),
      aboutAnimation.start({left:'-18%', opacity:1}, {duration: 0.5}),
      loginContentContainerAnimation.start({left:'10%', opacity:1}, {duration: 0.5})
    ]);
  };

  const handleAboutClick = async () => {
    await Promise.all([
      containerAnimation.start({left:'100%', opacity:1}, {duration: 0.5}),
      aboutPageAnimation.start({left:'0%', opacity:1}, {duration: 0.5}),
      initialAnimation.start({left:'120%', opacity:1}, {duration: 0.5}),
      textAnimation.start({left:'120%', opacity:1}, {duration: 0.5}),
      instaAnimation.start({left:'101%', opacity:1}, {duration: 0.5}),
      gmailAnimation.start({left:'101%', opacity:1}, {duration: 0.5}),
      loginAnimation.start({left:'104%', opacity:1}, {duration: 0.5}),
      aboutAnimation.start({left:'181%', opacity:1}, {duration: 0.5})
    ]);
    await Promise.all([
      containerAnimation.start({left:'-100%', opacity:1}, {duration: 0.001}),
      initialAnimation.start({left:'-80%', opacity:1}, {duration: 0.001}),
      textAnimation.start({left:'-80%', opacity:1}, {duration: 0.001}),
      instaAnimation.start({left:'-100%', opacity:1}, {duration: 0.001}),
      gmailAnimation.start({left:'-100%', opacity:1}, {duration: 0.001}),
      loginAnimation.start({left:'-100%', opacity:1}, {duration: 0.001}),
      aboutAnimation.start({left:'-18%', opacity:1}, {duration: 0.001})
    ]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.img
        src="assets/Img1.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '0%', position: 'absolute' }}
        animate={containerAnimation}
      />
      <motion.img
        src="assets/Img1.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '-100%', position: 'absolute', opacity: 0 }}
        animate={aboutPageAnimation}
      />
      <motion.img
        src="assets/Img1.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '-100%', position: 'absolute', opacity: 0 }}
        animate={loginPageAnimation}
      />
      {/*Landing Page Items */}
      <motion.img
        src="assets/Img2.png"
        alt="Initial"
        style={{ aspectRatio:'1.7', height: '100%',bottom: '0%', position: 'absolute' }}
        animate={initialAnimation}
      />
      <motion.img
        src="assets/Img3.png"
        alt="Navbar"
        style={{ width: '100%', height: '15%', position: 'absolute', opacity: 0 }}
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
      <button onClick={handleLoginClick}>
      <motion.img
        src="assets/Img7.png"
        alt="Login Text"
        style={{ width: '17.5%', height: '10%', left:'4%', bottom:'5%', position: 'absolute', opacity: 0 }}
        animate={loginAnimation}
      />
      </button>
      <button onClick={handleAboutClick}>
      <motion.img
        src="assets/Img8.png"
        alt="About Text"
        style={{ width: '15%', height: '8%', right:'4%', bottom:'6%', position: 'absolute', opacity: 0 }}
        animate={aboutAnimation}
      />
      </button>
      {/*Login Page Items */}
      <motion.div style={{width:'80%', height:'70%', left:'-100%', top:'20%', position:'absolute',opacity: 0}} animate={loginContentContainerAnimation}>
        <Login/>
      </motion.div>
    </div>
  );
};    
      