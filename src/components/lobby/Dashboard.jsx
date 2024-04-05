import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import "../../styles/Dashboard.scss";

export const Dashboard = ({ initialTime }) => {
  let answerRef = useRef();
  const [time, setTime] = useState(initialTime);
  const [hintTime, setHintTime] = useState(0);
  const [imageURL, setImageURL] = useState(''); 
  const [answer, setAnswer] = useState(''); 
  const [questionNumber, setQuestionNumber] = useState(''); 
  const [questionHint, setQuestionHint] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [hintAvailableText, setHintAvailableText] = useState('Hint will be available after ');
  let timer;
  let hintTimer;
  const currentTime = new Date();

  useEffect(() => {
    // Fetch image URL from backend
    const fetchData = async () => {
      if((localStorage.getItem('teamCode') ?? "" != "")) {
        try {
          const response = await axios.get('http://localhost:5000/api/dashboard/contest/1')
          setImageURL(response.data.questionURL);
          setQuestionHint(response.data.questionHint);
          const updatedTime = new Date(response.data.lastUpdated);
          if(questionHint.length) {
            setHintAvailableText("Next hint will be available after ");
          }
          if(questionHint.length === 3) {
            setHintAvailableText("No more Hint");
          }
          const newHintTime = Math.floor((currentTime.getTime() - updatedTime.getTime()) / 1000);
          setHintTime((900 - newHintTime % 900));
          if(response.data.questionNo < 10) {
            setQuestionNumber("0" + response.data.questionNo);
          } else {
            setQuestionNumber(response.data.questionNo);
          }
          if(response.data.questionURL === "testcompleted") {
            setTestCompleted(true);
          }
          setIsLoading(false);
        } catch(error) {
          setAnswer(error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchData();                           
    timer = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted]);

  useEffect(() => {
    hintTimer = setInterval(() => {
      setHintTime(prevTime => prevTime - 1);
      if(hintTime % 300 === 0) {
         window.location.reload();
      }
      console.log(hintTime)
    }, 1000);

    return () => clearInterval(hintTimer);
  }, [hintTime]);

  const handleSubmit = async event => {
    event.preventDefault();
    const answer = answerRef.current.value.trim().replace(/\s+/g, ' ').toLowerCase();

    try {
      const response = await axios.put('http://localhost:5000/api/dashboard/contest/1', {
        answer: answer 
      });
      console.log(response.data); 
      console.log(response.data.message)
      if(response.data.message === "Answer is correct") {
        toast.success(response.data.message);
        setHintTime((currentTime - response.data.lastUpdated) / 1000);
        window.location.reload();
      } else {
        toast.error(response.data.message);
      }
      if(response.data.question.queUrl === "testcompleted") {
        setTestCompleted(true);
        console.log("c")
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  if (isLoading) {
    return <div></div>;
  }

  if(time > 0) {
    return <div className='counter-container'>
      <div className="counter-image"><img src="assets/counter.svg" alt="" /></div>
      <div className="counter-text">Web Detector will start in</div>
      <div className="time-text">
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
      <div className="time-value">
        <div>{Math.floor((time  / 3600))}</div>
        <div>:</div>
        <div>{(Math.floor(time / 60)) % 60}</div>
        <div>:</div>
        <div>{Math.floor(time % 60)}</div>
      </div>
    </div>
  }

  return (
    <div className="dashboard-container">
      <div className="question-container">
        <div className="question">
          <img src={imageURL} alt="" className="question-img" />
        </div>
        <div className="action-container">
          <div className="question-number-container">
            <div className="question-number">Hunt No:</div>
            <div className="search-img-container">
              <p>{questionNumber}</p>
            </div>
          </div>
          <div className="answer-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="answer" className='answer-item'>Your Answer</label>
              <input type="text"  className="answer-item" id="your-answer" ref={answerRef} placeholder=" Your Answer"/>
            </form>
          </div>
          <div className="submit-container">
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
          {questionHint.length < 3 && <div className="hint-timer-container">
            {hintAvailableText}<br/>{Math.floor((hintTime % 300) / 60)} minutes {hintTime % 60} seconds
          </div>}
          {questionHint.length === 3 && <div className="hint-timer-container">
            No more Hint
          </div>}
        </div>
      </div>
      {questionHint.length > 0 && <div className="hint-section">
        <div className='hint-heading'>Hints:</div>
        <div className="hint-container">
          {[...Array(questionHint.length).keys()].map((index) => (
            <div className='hint'>{index + 1}: {questionHint[index]}</div>
          ))}
        </div>
      </div>}
    </div>
  )
}
