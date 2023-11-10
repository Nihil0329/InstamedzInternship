import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import './Questionnaire.css';
import DisplayQuestion from './DisplayQuestion';
  
function Quest() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const location=useLocation();
  const diseasename=location.state.id;

  return (
    <div>
      <h2 className="quest-title text-center pt-5">Take {diseasename} Screening Test </h2>
      <p className="quest-subtitle pb-3">This test is designed to help you assess your current emotional well-being and provide some insights into your mental health. Please answer the following questions honestly and to the best of your ability.</p>
      <div className='quest-bg'>
        <div className='row justify-content-md-center'>
          <div className='quest-boxborder'>
            <DisplayQuestion diseasename={diseasename} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Quest