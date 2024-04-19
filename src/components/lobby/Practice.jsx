import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import "../../styles/Dashboard.scss";
import { m } from 'framer-motion';

export const Practice = () => {
  let answerRef = useRef();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const questionURL = [
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/7.png?updatedAt=1712416576563",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/5.png?updatedAt=1712416610888",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/2.png?updatedAt=1712416647315",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/9.png?updatedAt=1712416604870",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/6.png?updatedAt=1712416597627",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/4.png?updatedAt=1712416608939",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/3.png?updatedAt=1712416601427",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/10.png?updatedAt=1712416609994",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/8.png?updatedAt=1712416610628",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/1.png?updatedAt=1712416595950"
  ];

  const questionAnswer = [
    "mohenjo daro",
    "michael jackson",
    "fermion condensate",
    "conor mcgregor",
    "usain bolt",
    "ram rath yatra",
    "french empire",
    "democratic republic of congo",
    "radhakishan damani",
    "national security agency",
    "Elon Musk",
    "solar eclipse",
    "jagjivan ram",
    "cameron white",
    "344503"
  ];

  const questionHint = [
    "Old is Gold!!", "Hrithik Roshan", "Civilization",
    "American singer, songwriter, and dancer", "Moon Walk", "King Of Pop",
    "Six", "Freezing Cold!!", "States of Matter",
    "Fight", "UFC", "One of the richest athlete in the world",
    "Record", "Speed", "Athletics",
    "Jai Shree Ram", "LK Advani", "Journey",
    "Connect the Images", "Morroco", "Luxury must be comfortable, otherwise it is not luxury",
    "Focus on Words", "War", "Democracy",
    "Money", "College", "Let's go shopping",
    "Mirror", "Do google Search", "Intelligence",
    "Facebook down", "Find the person", ""
  ];

  const questionSolution = [
    "",
    `Tesla CEO Elon Musk took a dig at Facebook/Instagram parent Meta over the global outage. In a post on X, formerly known as Twitter, Musk wrote, "If you're reading this post, it's because our servers are working."`,
  ];
 
  const handleSubmit = () => {
    const answer = answerRef.current.value.trim().replace(/\s+/g, ' ').toLowerCase();
    if(answer === questionAnswer[questionNumber - 1]) {
        toast.success("Correct Answer");
        answerRef.current.value = "";
        setShowAnswer(false);
        setQuestionNumber(questionNumber < 15 ? questionNumber + 1 : 1);
    } else {
        toast.error("Wrong Answer");
    }
  }

  const handlePrevBtn = () => {
    setShowAnswer(false);
    setQuestionNumber(questionNumber - 1);
  }

  const showAnswerActionBtn = () => {
    setShowAnswer(!showAnswer);
  }

  const handleNextBtn = () => {
    setShowAnswer(false);
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <div className="dashboard-container">
      <div className="question-container">
        <div className="question">
          <img src={questionURL[questionNumber - 1]} alt="" className="question-img" />
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
          <div className="action-btn-container">
            <div>
                {questionNumber > 1 && <button className="action-btn prevActionButton" onClick={handlePrevBtn}>Previous</button>}
                {questionNumber < 15 && <button className="action-btn nextActionButton" onClick={handleNextBtn}>Next</button>}
            </div>
            <div>
                <button className="action-btn showAnswerActionButton" onClick={showAnswerActionBtn}>{showAnswer ? (<p>Hide Answer</p>) : (<p>Show Answer</p>)}</button>
            </div>
          </div>
          {showAnswer && <div className="show-answer-container">
            Answer: {questionAnswer[questionNumber - 1]}
          </div>}
          
        </div>
      </div>
      {questionHint.length > 0 && <div className="hint-section">
        <div className='hint-heading'>Hints:</div>
        <div className="hint-container">
          {[...Array(3).keys()].map((index) => (
            <div className='hint'>{index + 1}: {questionHint[(questionNumber - 1) * 3 + index]}</div>
          ))}
        </div>
      </div>}

      {showAnswer && <div className="solution-container">
          Solution: <p>{questionSolution[questionNumber - 1]}</p>
        </div>}
    </div>
  )
}
