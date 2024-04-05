import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Lobby } from "./components/Lobby";
import { About } from "./components/About";
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
              <Route index element={<Dashboard/>} />
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
