import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Diseases.css';
import 'bootstrap/dist/css/bootstrap.css';
import diseaseList from "../../sources/DiseaseList"
import img1 from'../../assets/img1.png'
import img2 from'../../assets/img2.png'

function Diseases() {
  const navigate = useNavigate();

  const redirectpage = (id) => {
    navigate('/d',{state:{id:id.name}});
  };
  return (
    <div>
      <div className="diseases-titlebg">
        <div className="row">
          <div className="col text-center">
            <img src={img1} alt="" className="diseases-imgpos" />
          </div>
          <div className="col-sm-6 col-6 pt-5">
            <h4 className="diseases-title">SOUL CARE</h4>
            <p className="diseases-subtitle">Get assistance on your mental health issues, including stress, anxiety, and depression, with our specialists</p>
          </div>
          <div className="col text-center">
          <img src={img2} alt="" className="diseases-imgpos" />
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row justify-content-around">
            {diseaseList.map(function(disease) {
              return (
                <div className="col-5 diseases-cardbox">
                  <h1 className="diseases-cardtitle">{disease.name}</h1>
                  <p className='diseases-cardcontext'>{disease.description}</p> 
                  <button className="diseases-cardbtn" onClick={()=>redirectpage(disease)}>Know more</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default Diseases
