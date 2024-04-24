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
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/7.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/15.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/12.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/9.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/6.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/14.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/13.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/10.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/8.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/11.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/5.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/4.png?updatedAt=1712416608939",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/2.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/1.png",
    "https://ik.imagekit.io/webdetector/WEB%20DETECTOR/3.png"
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
    "elon musk",
    "solar eclipse",
    "cameron white",
    "jagjivan ram",
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
    "Facebook down", "Find the person", "If you’re reading this post, it’s because our servers are working",
    "Month with 30 days", "Mercury represent wednesday", "Connection of sun with 8 day of month",
    "Fourth Player?", "Captain of same franchise", "2008-2012 IPL",
    "Indian National Congress (Organisation) and Indian National Congress (Requisitionists)", "Congress was divided", "One who served as Defense Minister",
    "A special Postal Index Number?", "First long-distance raid across desert terrain undertaken by the Indian Army", "A Unique Postal History of Indo-Pak War 1971"
  ];

  const questionSolution = [
    `It's a movie name, and that symbol belongs to The Indus Valley Civilization. Mohenjo-Daro was one of the largest cities of the ancient Indus Valley Civilisation, also known as the Harappan Civilization. Additionally, 'Mohenjo-Daro' is the title of a movie.🎬.`,
    `The first picture on the screen is from the game 'Taken', popularly known as 'KING'. Michael Jackson is popularly known as the 'King of Pop'.`,
    `The five pictures on the screen represent the five states of matter: Bose-Einstein condensate, solid, liquid, gas, and plasma. The sixth state of matter is called 'fermion condensate'."`,
    ``,
    `The picture on the screen is of a runner who won a gold medal in the Olympics. He is from Jamaica, the same country where the famous singer Bob Marley was born. The name that comes to mind is 'Usain Bolt'.`,
    ``,
    `7`,
    ``,
    `9`,
    `The symbol in the mirror represents "Illuminati". If you read Illuminati in a mirror, you can read "Itanimulli",then search google "Itanimulli" you can see National security agency (NSA) site of USA.`,
    `Tesla CEO Elon Musk took a dig at Facebook/Instagram parent Meta over the global outage. In a post on X, formerly known as Twitter, Musk wrote, "If you're reading this post, it's because our servers are working."`,
    `The calendar for April 2024 is depicted, with Wednesday marked as the 3rd day and 30 days in month. On this day, Mercury, representing Wednesday in Hindu astrology, is mentioned. Only April aligns with Wednesday as the 3rd day. Notably, the 8th day, April 8, 2024, is highlighted, coinciding with a solar eclipse. This is confirmed by the presence of the Sun in the image and the solar eclipse visible in the background.`,
    `Four jerseys are displayed: VVS Laxman (nicknamed "Very Very Special"), Adam Gilchrist (known as "Gilly," represented Punjab), Kumar Sangakkara (wearing jersey number 11 as Sri Lanka's wicketkeeper), and an Australian player. All of these players served as captains for the Deccan Chargers franchise. Additionally, Cameron White was the fourth captain.`,
    `Indian National Congress (Requisitionists) was created in 1969; it was created and led by Indira Gandhi. The then Indian national congress was split into two Indian National Congress (O) and Indian National Congress (R). Defense minister was Jagjivan Ram at that time`,
    `The Battle of Chachro involved a division-sized assault and multiple raids by the Indian Armed Forces on the eastern town of Chachro in the Thar desert of West Pakistan. The battle resulted in India capturing the town and around 3,000 sq. miles of surrounding sandy wasteland. Mahavir Chakra awarded to its commanding officer Lt Col Bhawani Singh. Chachro of Pakistan remained under control of Indian Army from 16th December 1971 to 22nd December 1972. Postal Index Number was allotted to Chachro being No. 344503`
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
          <p>Solution</p> : <p>{questionSolution[questionNumber - 1]}</p>
        </div>}
    </div>
  )
}
