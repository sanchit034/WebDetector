import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { Login } from './Login';
import "../../styles/Home.scss";
import { About } from './About';

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
  const aboutContentContainerAnimation = useAnimation();
  const backButtonAnimation = useAnimation();

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
        initialAnimation.start({aspectRatio:'1.7', width:'73.2%'})
      ]);

      await Promise.all([
        containerAnimation.start({opacity:0.8}, {duration: 1.5}),
        symbolAnimation.start({opacity:1}, {duration: 1.5}),
        initialAnimation.start({aspectRatio:'1.7', width:'45.35%'}, {duration: 1.5}),
        textAnimation.start({top:'73%', opacity:1}, {duration: 1.5})
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
      initialAnimation.start({left:'-80%', opacity:0}, {duration: 0.5}),
      textAnimation.start({left:'-80%', opacity:0}, {duration: 0.5}),
      instaAnimation.start({left:'-100%', opacity:0}, {duration: 0.5}),
      gmailAnimation.start({left:'-100%', opacity:0}, {duration: 0.5}),
      loginAnimation.start({left:'-100%', opacity:0}, {duration: 0.5}),
      aboutAnimation.start({left:'-18%', opacity:0}, {duration: 0.5}),
      loginContentContainerAnimation.start({left:'10%', opacity:1}, {duration: 0.5})
    ]);
  };

  const handleAboutClick = async () => {
    await Promise.all([
      aboutContentContainerAnimation.start({opacity:1}, {duration:0.001})
    ]);
    await Promise.all([
      aboutContentContainerAnimation.start({left:'0%', opacity:1}, {duration:0.5}),
      initialAnimation.start({left:'120%', opacity:1}, {duration: 0.5}),
      textAnimation.start({left:'120%', opacity:1}, {duration: 0.5}),
      instaAnimation.start({left:'101%', opacity:1}, {duration: 0.5}),
      gmailAnimation.start({left:'101%', opacity:1}, {duration: 0.5}),
      loginAnimation.start({left:'104%', opacity:1}, {duration: 0.5}),
      aboutAnimation.start({left:'181%', opacity:1}, {duration: 0.5}),
      backButtonAnimation.start({left:'6%', opacity:1}, {duration: 0.5})
    ]);
    await Promise.all([
      initialAnimation.start({left:'-80%', opacity:0}, {duration: 0.001}),
      textAnimation.start({left:'-80%', opacity:0}, {duration: 0.001}),
      instaAnimation.start({left:'-100%', opacity:0}, {duration: 0.001}),
      gmailAnimation.start({left:'-100%', opacity:0}, {duration: 0.001}),
      loginAnimation.start({left:'-100%', opacity:0}, {duration: 0.001}),
      aboutAnimation.start({left:'-18%', opacity:0}, {duration: 0.001})
    ]);
  };

  const handleBackBtnClick = async () => {
    await Promise.all([
      initialAnimation.start({left:'120%', opacity:1}, {duration: 0.001}),
      textAnimation.start({left:'120%', opacity:1}, {duration: 0.001}),
      instaAnimation.start({left:'100%', opacity:1}, {duration: 0.001}),
      gmailAnimation.start({left:'100%', opacity:1}, {duration: 0.001}),
      loginAnimation.start({left:'100%', opacity:1}, {duration: 0.001}),
      aboutAnimation.start({left:'182%', opacity:1}, {duration: 0.001})
    ]);
    await Promise.all([
      aboutContentContainerAnimation.start({left:'-100%', opacity:0}, {duration:0.5}),
      initialAnimation.start({left:'20%', opacity:1}, {duration: 0.5}),
      textAnimation.start({left:'20%', opacity:1}, {duration: 0.5}),
      instaAnimation.start({left:'1%', opacity:1}, {duration: 0.5}),
      gmailAnimation.start({left:'1%', opacity:1}, {duration: 0.5}),
      loginAnimation.start({left:'4%', opacity:1}, {duration: 0.5}),
      aboutAnimation.start({left:'81%', opacity:1}, {duration: 0.5}),
      backButtonAnimation.start({left:'-94%', opacity:0}, {duration: 0.5})
    ]);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.img
        src="assets/landingBG.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '0%', position: 'absolute' }}
        animate={containerAnimation}
      />
      <motion.img
        src="assets/landingBG.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '-100%', position: 'absolute', opacity: 0 }}
        animate={aboutPageAnimation}
      />
      <motion.img
        src="assets/landingBG.png"
        alt="Background"
        style={{ width: '100%', height: '100%', left: '-100%', position: 'absolute', opacity: 0 }}
        animate={loginPageAnimation}
      />
      {/*Landing Page Items */}
      <motion.img
        src="assets/landingImageIcon.png"
        alt="Initial"
        style={{ width: '73.2%', aspectRatio:'1.7', minWidth:'280px', top: '88%', position: 'absolute', transform: 'translate(0%, -50vh)' }}
        animate={initialAnimation}
      />
      <motion.div
        className='flex justify-between items-center'
        style={{ width: '100%', height: '16%', maxHeight:'120px', position: 'absolute', opacity: 0}}
        animate={symbolAnimation}
      >
        <div className='h-full' style={{marginLeft: '16px', height: '72%'}}><img className='h-full' src="assets/webDetectorLogo.svg" alt="" /></div>
        <div className='h-full'style={{marginRight: '10px', height: '72%'}}><img className='h-full' src="assets/codehelpLogo.svg" alt="" /></div>
      </motion.div>
      <motion.img
        src="assets/WebDetectorText.png"
        alt="Text"
        style={{ width: '46%', aspectRatio:'4.55', minWidth:'220px', bottom: '-55%', position: 'absolute', opacity: 0, transform: 'translate(0%, -50vh)' }}
        animate={textAnimation}
      />
      <a href="https://www.instagram.com/webdetector">
      <motion.img
        src="assets/instaIcon.svg"
        alt="Text"
        style={{ width: '3%', aspectRatio:1, minWidth:'25px', left:'1%', top:'45%', position: 'absolute', opacity: 0 }}
        animate={instaAnimation}
      />
      </a>
      <a href="mailto:webdetectorr@gmail.com">
      <motion.img
        src="assets/mailIcon.svg"
        alt="Text"
        style={{ width: '3%', aspectRatio:1, minWidth:'25px', left:'1%', top:'52%', position: 'absolute', opacity: 0 }}
        animate={gmailAnimation}
      />
      </a>
      <button onClick={handleLoginClick}>
      <motion.img
        src="assets/loginIcon.svg"
        alt="Login Text"
        style={{ width: '10.6%', aspectRatio:7, minWidth:'120px', left:'1%', bottom:'5%', position: 'absolute', opacity: 0 }}
        animate={loginAnimation}
      />
      </button>
      <button onClick={handleAboutClick}>
      <motion.img
        src="assets/Img8.png"
        alt="About Text"
        style={{ width: '10.6%', aspectRatio:6.80, minWidth:'90px', right:'4%', bottom:'6%', position: 'absolute', opacity: 0 }}
        animate={aboutAnimation}
      />
      </button>
      {/*Login Page Items */}
      <motion.div style={{width:'80%', height:'70%', left:'-100%', top:'20%', position:'absolute',opacity: 0}} animate={loginContentContainerAnimation}>
        <Login/>
      </motion.div>

      {/* <motion.div
        style={{ width: '30px', aspectRatio:1, left:'-95%', top:'20%', position: 'absolute', opacity: 0 }}
        animate={backButtonAnimation}
      >
        <button onClick={handleBackBtnClick}>
          <img src="assets/about/backButtonImg.png" alt="Back Button" />
        </button>
      </motion.div> */}
      <motion.div style={{width:'100%', height:'75%', left:'-100%', top:'16%', position:'absolute',opacity: 0}} animate={aboutContentContainerAnimation}>
        <About/>
      </motion.div>
    </div>
  );
};    
      
