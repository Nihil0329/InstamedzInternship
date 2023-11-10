import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Questionnaire.css';
import { Anxiety,Depression } from '../../sources/SoulCare'
import {useEffect} from 'react';

function DisplayQuestion(props) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();
  const [questions] = useState(() =>{
    if((props.diseasename)==="Anxiety"){
      return Anxiety
    }
    else{
      return Depression
    }
  });
  var flag=0;
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = (isCorrect) => {   
    if(isCorrect){
      setScore(score+1);
    }
  };

  const submitClicked =() =>{
    console.log(score);
    if(score < questions.length/2){
      flag=1
    }
    navigate('/r',{state:{id:flag}});
  };
  return (
    <div className="display-card">
      {questions.map((question, index) => (
        <div key={index} className="display-question">
          <p>{question.text}</p>
          <ol>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex} className='display-list'>
                <label>
                  <input
                    type="radio"
                    id="radiobtn"
                    name={`question${index}`}
                    checked={answers[index] === optionIndex}
                    onClick={() => calculateScore(option.isCorrect)}
                    onChange={() => handleAnswerSelect(index, optionIndex,)}
                  />
                  &nbsp;
                  {option.text}
                </label>
              </li>
            ))}
          </ol>
        </div>
      ))}
      <div className="text-center">
      <button onClick={submitClicked} className='display-btn'>Submit Test</button>
      </div>
      

    </div>
    
    );
  }
  
  export default DisplayQuestion