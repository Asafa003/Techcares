import {Chart as ChartJs, elements} from 'chart.js/auto';
import {Line} from 'react-chartjs-2'
import React, { useState } from "react";


const LineChart = ({patients, userId=3, monthNeeded}) =>{
    const [patientData, setPatientData] = useState({
        labels:patients[userId]
        .diagnosis_history.slice(0,monthNeeded? monthNeeded: -1)
        .reverse().map((data)=> data.month.slice(0,3) + ", " + data.year),
          datasets:[
              {
                  label: "Diastolic",
                  tension:0.5,
                  data:patients[userId].diagnosis_history.map((data)=> data.blood_pressure.diastolic.value),
                  fontSize:12,
              },
              {
                  label:"Systolic",
                  tension:0.5,
                  fontSize:12,
                  options:{
                    scales:{
                        yAxes:{
                            ticks:{
                                font:{
                                    size:12
                                }
                            }
                        }
                    },
                    onClick: (e)=>{
                        alert(e)
                    
                // if(elements.lenth > 0){
                //     const points = elements[0];
                //     alert(points)

                // }
            }
          },
                  data:patients[userId].diagnosis_history.map((data)=> data.blood_pressure.systolic.value)
              }
          ],
          
       });
    return (
       
        <Line data={patientData}/>
    );
    
}

export default LineChart;
