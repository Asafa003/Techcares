import {Chart as ChartJs, elements} from 'chart.js/auto';
import {Line} from 'react-chartjs-2'
import React, { useState } from "react";


const LineChart = ({patients, userId=3, monthNeeded}) =>{
    const [patientData, setPatientData] = useState({
        labels:patients[userId].diagnosis_history.slice(0,monthNeeded? monthNeeded: -1).reverse().map((data)=> data.month + ", " + data.year),
          datasets:[
              {
                  label: "Systolic",
                  tension:0.5,
                  data:patients[userId].diagnosis_history.map((data)=> data.blood_pressure.systolic.value)
              },
              {
                  label: "Diastolic",
                  tension:0.5,
                  options:{
                    onClick: (e)=>{
                        alert(e)
                // if(elements.lenth > 0){
                //     const points = elements[0];
                //     alert(points)

                // }
            }
          },
                  data:patients[userId].diagnosis_history.map((data)=> data.blood_pressure.diastolic.value)
              }
          ],
          
       });
    return (
       
        <Line data={patientData}/>
    );
    
}

export default LineChart;
