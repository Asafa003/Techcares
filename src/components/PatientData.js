import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import LineChart from "./LineChart";
import Cards from "./Cards";
import respRate from "../assets/respiratory rate.png"
import temp from "../assets/temperature.png"
import heart from "../assets/HeartBPM.png"

const PatientData = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const username = "coalition";
      const password = "skills-test";
      const token = btoa(`${username}:${password}`);

      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        setPatients(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("Calling from here", patients[1]);
  return (
    <div>
      <div>
        <div className="card mb-4 history_card">
          <div className="card-header">Diagnosis History</div>
          <div className="card-bodys">
            <div className="row">
              <div className="col-md-8">
                <div
                  id="chartContainer"
                  style={{ height: "300px", width: "100%" }}
                >
                  <LineChart patients={patients} monthNeeded={6} />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p>Systolic:</p>
                  <p>
                    {
                      patients[3].diagnosis_history[0].blood_pressure.systolic
                        .value
                    }
                  </p>
                  <p>
                    {
                      patients[3].diagnosis_history[0].blood_pressure.systolic
                        .levels
                    }
                  </p>
                </div>
                <div>
                  <p>Diastolic:</p>
                  <p>
                    {
                      patients[3].diagnosis_history[0].blood_pressure.diastolic
                        .value
                    }
                  </p>
                  <p>
                    {
                      patients[3].diagnosis_history[0].blood_pressure.diastolic
                        .levels
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
            <Cards 
            icon={respRate}
            title="Respiratory System"
            unit='bpm'
            patient={patients[3].diagnosis_history[0].respiratory_rate}
            bgColor="#E0F3FA "
            
             />
          </div>
          <div className="col-md-4">
            <Cards
            icon={temp}
            title="Temperature"
            unit='bpm'
             patient={patients[3].diagnosis_history[0].temperature}
             bgColor="#FFE6E9 "
              />
          </div>
          <div className="col-md-4">
            <Cards 
            icon={heart}
            title="Heart Rate"
            unit='bpm'
            patient={patients[3].diagnosis_history[0].heart_rate} 
            bgColor="#FFE6F1 "
            />
          </div>
        </div>
        </div>

        
      </div>
      <div className="card mt-4">
        <div className="card-header manrope-unique-weight-800">Diagnostic List</div>
        <div className="card-body">
        <div className="card-body">
          <table className="table">
            <thead className="manrope-unique-weight-800">
              <tr>
                <th scope="col">Problem/Diagnosis</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{patients[3].diagnostic_list[0].name}</td>
                  <td>{patients[3].diagnostic_list[0].description}</td>
                  <td>{patients[3].diagnostic_list[0].status}</td>
                </tr>
                <tr>
                  <td>{patients[3].diagnostic_list[1].name}</td>
                  <td>{patients[3].diagnostic_list[1].description}</td>
                  <td>{patients[3].diagnostic_list[1].status}</td>
                </tr>
                <tr>
                  <td>{patients[3].diagnostic_list[2].name}</td>
                  <td>{patients[3].diagnostic_list[2].description}</td>
                  <td>{patients[3].diagnostic_list[2].status}</td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
