import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Description.css'
import img5 from "../../assets/img5.png";
import descimg1 from "../../assets/descimg1.jpg"
import descimg2 from "../../assets/descimg2.jpg"
import descimg3 from "../../assets/descimg3.jpg"
import diseaseList from '../../sources/DiseaseList';

function Description() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();
  const location=useLocation();
  const disease=location.state.id;
  const [diseasedetails] = useState(() =>{
    if((disease)==="Anxiety"){
      return diseaseList[0]
    }
    else{
      return diseaseList[1]
    }
    
  });
  const redirectpage = () => {
    navigate('/q',{state:{id:diseasedetails.name}});
  };

  return (
    <div>
      <div className="d-flex desc-titlebg justify-content-between">
        <div className='desc-title'>
          <h2>{diseasedetails.name}</h2>
          <p>{diseasedetails.definition}</p>
        </div>
        <div>
          <img src={img5} alt="" className='desc-imgpos'/>
        </div>
      </div>
      <div className='desc-bg'>
        <div className='desc-box'>
          <div className='desc-types'>
            <h4>Types of {diseasedetails.name}</h4>
            <ul className='pt-3'>
              {diseasedetails.types.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='desc-symptoms'>
            <h4>Symptoms</h4>
            <p className='pt-2'>{diseasedetails.symptoms}</p>
          </div>
        </div>
        <div className="d-flex justify-content-around pt-4 pb-5 text-center">
            <div class="desc-card" onClick={()=>redirectpage()}>
                <img src={descimg1} alt="" />
                <p>Taking Screening Test</p>
            </div>
            <div class="desc-card" >
                <img src={descimg2} alt="" />
                <p>Get Remedies</p>
            </div>
            <div class="desc-card">
                <img src={descimg3} alt="" />
                <p>Connect with Doctor</p>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Description
