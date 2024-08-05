import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const PatientList = () => {
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

  return (
    <div className="card patient_list">
      <div className="d-flex justify-content-between align-content-between manrope-unique-weight-800">
        Patients
        <BiSearch
          className="py-0 mx-auto my-auto"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </div>
      <ul className="list-group">
        {patients.slice(0,12).map((patient, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              patient.active ? "active" : ""
            }`}
          >
            <div className="d-flex align-items-center side_list">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="patients rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <div>{patient.name}</div>
                <small>
                  {patient.gender}
                  {patient.age}
                </small>
              </div>
            </div>
            <button className="btn btn-link text-decoration-none">
              <BsThreeDots/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
