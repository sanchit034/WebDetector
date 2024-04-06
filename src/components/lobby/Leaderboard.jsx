import React, { useState, useEffect } from 'react';
import '../../styles/Leaderboard.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Dashboard } from './Dashboard';

export const Leaderboard = ({initialTime}) => {
  const [leaderboardEntries, setLeaderboardEntries] = useState([]);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [selfEntry, setSelfEntry] = useState([]);

  function convertTimeIntoMinutes(userTimeDetails) {
    const istDate = new Date(userTimeDetails);
    const hour = istDate.getHours().toString().padStart(2, '0');
    const minute = istDate.getMinutes().toString().padStart(2, '0');
    const second = istDate.getSeconds().toString().padStart(2, '0');
    
    return (hour + ":" + minute + ":" + second);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastCallTime = localStorage.getItem('lastApiCallTime');
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - Number(lastCallTime);
        if (lastCallTime && timeDiff < 1500) {
          return;
        }
        const response = await axios.get('https://webdetector-backend.onrender.com/api/winners');
        console.log(response);
        const sortedEntries = response.data.sort((a, b) => {
          if (a.score ?? 0 !== b.score ?? 0) {
            if(b.score ?? 0 > a.score ?? 0) {
              return 1;
            } 
            return -1;
          }
          if(b.updatedAt < a.updatedAt) {
            return 1;
          }
          return -1;
        });
        setLeaderboardEntries(sortedEntries);
        for (let i = 0; i < sortedEntries.length; i++) {
          sortedEntries[i].maxProgress = i + 1;
          sortedEntries[i].updatedAt = convertTimeIntoMinutes(sortedEntries[i].updatedAt)
        }
        console.log(sortedEntries);
        let userId = localStorage.getItem('userId');
        const userDetails = response.data.filter(entry => entry.members.includes(userId));
        setSelfEntry(userDetails[0] ?? response.data[0]);
        console.log(userDetails);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); 

  if (isLoading) {
    return <div className=' text-white text-4xl'>Leaderboard is updating...</div>;
  }
  return (
    <Dashboard initialTime={initialTime}/>
  )

  

  return (
    <div className='leaderboard-container'>
      <div className='leaderboard-img'><img src="/assets/leaderboardImage.png" alt="Leaderboard_Image" /></div>
      <div className='leaderboard'>
        <div className="winners">
        <div className="card-content" id="card-content-header">
            <div className='rank'>#</div>
            <div className='team-name'>Team Name</div>
            <div className='correct-answer'>Correct Answer</div>
            <div className='time'>Time</div>
          </div>
          {[...Array(leaderboardEntries.length < 5 ? leaderboardEntries.length : 5).keys()].map((index) => (
            <div key={index}  className="card-content">
              <div className='rank'>{leaderboardEntries[index].maxProgress}</div>
              <div className='team-name'>{leaderboardEntries[index].teamName}</div>
              <div className='correct-answer'>{leaderboardEntries[index].score ?? "0"}</div>
              <div className='time'>{leaderboardEntries[index].updatedAt}</div>
            </div>
          ))}
        </div>
        <div className="your-position">
          <div className="your-position-heading">Your Position</div>
          <div className="card-content your-position-card">
            <div className='rank'>{selfEntry.maxProgress}</div>
            <div className='team-name'>{selfEntry.teamName}</div>
            <div className='correct-answer'>{selfEntry.score ?? "0"}</div>
            <div className='time'>{selfEntry.updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
