import React from 'react';
import '../styles.css'; 

const Cards = ({ icon="icon",title='',unit='', patient, bgColor="" }) => {
  const value= patient.value;
  const level =patient.levels;
  // console.log(patient);

    // const patient = patients[userId].diagnosis_history
  return (
    <div className="card card_native text-center " style={{ backgroundColor: bgColor}}>
      <div className="card-body">
        <div className="icon">
          <img src={icon} alt={title}/>
        </div>
        <h5 className="card-title ">{title}</h5>
        <p className="statuss manrope-unique-weight-800">{value} {unit} </p>
        <p className="status ">{level} </p>
      </div>
    </div>
  );
};

export default Cards;
