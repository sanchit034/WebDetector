import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Lobby } from "./components/Lobby";
import { About } from "./components/home/About";
import { Landing } from "./components/home/Landing";
import { Login } from "./components/home/Login";
import { Register } from "./components/home/Register";
import { Dashboard } from "./components/lobby/Dashboard";
import { Leaderboard } from "./components/lobby/Leaderboard";
import { Team } from "./components/lobby/Team";
import { Profile } from "./components/lobby/Profile";
// import { Toaster } from 'react-hot-toast';
// import { useSelector } from "react-redux";
import './App.css';

function App() {
  const deadline = new Date('2024-04-06T21:00:00');
  const now = new Date();
  
  const timeDiff = deadline - now;
  let initialTime = 0;

  if (timeDiff > 0) {
    const seconds = Math.floor(timeDiff / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    initialTime = days * 24 * 3600 + hours * 3600 + minutes * 60 + remainingSeconds;
    console.log(`Time until April 6th, 9:00 PM: ${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`);
  }
  initialTime = 0;
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Landing/>} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="about" element={<About/>}/>
            <Route path="/lobby/" element={<Lobby />}>
              <Route index element={<Dashboard initialTime={initialTime}/>} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="team" element={<Team />} />
              <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
