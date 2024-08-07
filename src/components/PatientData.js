import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import LineChart from "./LineChart";
import Cards from "./Cards";
import respRate from "../assets/respiratory rate.png";
import temp from "../assets/temperature.png";
import heart from "../assets/HeartBPM.png";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const PatientData = () => {
  const [patients, setPatients] = useState([]);
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
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  // Ensure that the data is available before rendering the component
  if (patients.length === 0) return null;

  return (
    <div>
      <div>
        <div className="card mb-4 history_card ">
          <div className="card-header manrope-unique-weight-800">
            Diagnosis History
          </div>
          <div className="card-bodys">
            <div className="row">
              <div className="col-md-8">
              <div className="d-flex justify-content-between">
              <p className="manrope-unique-weight-600">Blood Pressure</p>
              <span>
              <div className="d-flex">
              <p className="">Last 6 months</p>
              <MdOutlineKeyboardArrowDown className="mt-1 ml-3" />
              </div>
              </span>
              </div> 
                <div
                  id="chartContainer"
                  style={{ height: "280px", width: "100%" }}
                >
                  <LineChart patients={patients} monthNeeded={6} />
                </div>
              </div>
              <div className="col-md-4 card-bodyss">
                <div className="mt-4 systolic">
                  <div className="d-flex gap-1">
                    <div className="circle mt-2"></div>
                    <p className="manrope-unique-weight-600 my-1 mb-2">Systolic:</p>
                  </div>

                  <p className="value manrope-unique-weight-600 my-0">
                    {
                      patients[3].diagnosis_history[0].blood_pressure.systolic
                        .value
                    }
                  </p>
                  <div className="d-flex">
                    <MdOutlineArrowDropUp className="mt-1 mr-2" />
                    <p className="my-0">
                      {
                        patients[3].diagnosis_history[0].blood_pressure.systolic
                          .levels
                      }
                    </p>
                  </div>
                  <hr className="mb-0" />
                </div>
                <div className="systolic">
                <div className="d-flex gap-1">
                <div className="circles mt-2"></div>
                <p className="manrope-unique-weight-600 my-1">Diastolic:</p>
                </div>
                  
                  <p className="value manrope-unique-weight-600 my-0">
                    {
                      patients[3].diagnosis_history[0].blood_pressure.diastolic
                        .value
                    }
                  </p>
                  <div className="d-flex">
                    <MdOutlineArrowDropDown className="mt-1" />
                    <p className="manrope-unique-weight-400">
                      {
                        patients[3].diagnosis_history[0].blood_pressure
                          .diastolic.levels
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Cards
                icon={respRate}
                title="Respiratory System"
                unit="bpm"
                patient={patients[3].diagnosis_history[0].respiratory_rate}
                bgColor="#E0F3FA "
              />
            </div>
            <div className="col-md-4">
              <Cards
                icon={temp}
                title="Temperature"
                unit={<span><sup>o</sup>F</span>}
                patient={patients[3].diagnosis_history[0].temperature}
                bgColor="#FFE6E9 "
              />
            </div>
            <div className="col-md-4">
              <Cards
                icon={heart}
                title="Heart Rate"
                unit="bpm"
                patient={patients[3].diagnosis_history[0].heart_rate}
                bgColor="#FFE6F1 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card diagnosis_details mt-4">
        <div className="card-header manrope-unique-weight-800">
          Diagnostic List
        </div>
        <div className="card-body">
          <div className="card-body diagnostic_tr">
            <table className="table">
              <thead className="manrope-unique-weight-800 tabs">
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
