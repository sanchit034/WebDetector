import React, { useState, useEffect } from 'react';
import '../../styles/Leaderboard.scss';
import axios from 'axios';

export const Leaderboard = () => {
  const [leaderboardEntries, setLeaderboardEntries] = useState([]);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [selfEntry, setSelfEntry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leaderboard/winners');
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
        }
        console.log(sortedEntries);
        let userId = localStorage.getItem('userId');
        const userDetails = response.data.filter(entry => entry.members.includes(userId));
        setSelfEntry(userDetails[0] ?? response.data[0]);
        console.log(userDetails);
      } catch (error) {
        setError(error);
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
    <div className='leaderboard-container'>
      <div className='leaderboard-img'><img src="/assets/Img14.png" alt="Leaderboard_Image" /></div>
      <div className='leaderboard'>
        <div className="winners">
          <div className="card-content" id="card-content-header">
            <div className='rank'>#</div>
            <div className='team-name'>Team Name</div>
            <div className='correct-answer'>Correct Answer</div>
            <div className='time'>Time</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[0].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[1].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[2].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[3].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[4].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[5].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>{leaderboardEntries[6].teamName}</div>
            <div className='correct-answer'>{leaderboardEntries[4].score ?? "0"}</div>
            <div className='time'>20:24</div>
          </div>
        </div>
        <div className="your-position">
          <div className="your-position-heading">Your Position</div>
          <div className="card-content">
            <div className='rank'>1</div>
            <div className='team-name'>name</div>
            <div className='correct-answer'>4</div>
            <div className='time'>20:24</div>
          </div>
        </div>
      </div>
    </div>
  )
}
