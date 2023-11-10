import React from 'react'
import { useLocation } from 'react-router-dom';
import img4 from'../../assets/img4.png'
import img3 from'../../assets/img3.png'

function QuestResult() {
  const location=useLocation();
  const flag=location.state.id;
  const showPosResults = flag;

  return (
    <div className='result-bg'>
      {showPosResults ?
      (
        <div className='mt-5 result-card text-center'>
          <img src={img4} alt="" className='result-img'/>
          <h2>Minimal to Mild</h2>
          <p>Your responses doesnot indicate any potential concern, we recommend home remedies and exercises to help you recover better</p>
          <button className='result-btn'>Get Remedies</button> 
        </div>
      )
      :(
        <div className='result-card text-center'>
          <img src={img3} alt="" className='result-img'/>
          <h2>Moderate to Severe</h2>
          <p>Your responses indicate a potential concern, we strongly recommend consulting a mental health professional for a comprehensive assessment and appropriate guidance</p>
          <button className='result-btn'>Connect With Doctor</button>
        </div>
      )}
    </div> 
  )
}
export default QuestResult
