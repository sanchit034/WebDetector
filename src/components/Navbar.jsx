import React, { useState, useEffect } from 'react';
import '../styles/Navbar.scss';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [tooltipVisibility, setTooltipVisibility] = useState({
    profile: false,
    lobby: false,
    leaderboard: false
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 50);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const pathArray = pathname.split("/");
    const currentPath = pathArray[pathArray.length - 1];

    setTooltipVisibility({
      profile: currentPath.includes("profile"),
      lobby: currentPath.includes("lobby"),
      leaderboard: currentPath.includes("leaderboard")
    });
  }, [pathname]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      {isMobileView ? (
        <>
          <div className='mobile-view'>
            <img src="/assets/Img16.png" alt="Menu Lines" className="hamburger"/>
          </div>
        </>
      ) : (
        <div className="sidebar">
          <div 
            className={clsx(
              "nav-item relative transition-all ease-in-out group-hover:scale-110 items-center justify-center b rounded-full p-2 dashboard flex flex-col",
              tooltipVisibility.profile && "active"
            )}
          >
              <a href="/lobby/profile">
                  <img src="/assets/Img9.png" alt="Profile" className="images" />
              </a>
              {tooltipVisibility.profile && <span className="tooltip">Profile</span>}
          </div>

          <div 
            className={clsx(
              "nav-item relative transition-all ease-in-out group-hover:scale-110 items-center justify-center b rounded-full p-2 dashboard flex flex-col",
              tooltipVisibility.lobby && "active"
            )}
          >
              <a href="/lobby">
                  <img src="/assets/Img10.png" alt="Questions" className="images" />
              </a>
              {tooltipVisibility.lobby && <span className="tooltip">Questions</span>}
          </div>

          <div 
            className={clsx(
              "nav-item relative transition-all ease-in-out group-hover:scale-110 items-center justify-center b rounded-full p-2 dashboard flex flex-col",
              tooltipVisibility.leaderboard && "active"
            )}
          >
              <a href="/lobby/leaderboard">
                  <img src="/assets/Img11.png" alt="Leaderboard" className="images" />
              </a>
              {tooltipVisibility.leaderboard && <span className="tooltip">Leaderboard</span>}
          </div>
          <button onClick={handleLogout}><img src="/assets/Img12.png" alt="Logout" className="images"/></button>
        </div>
      )}
    </>
  );
};
