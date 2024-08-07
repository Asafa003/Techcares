import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="card patient_list">
      <div className="d-flex justify-content-between align-items-center manrope-unique-weight-800 p-3 sidenav_top_header">
        <div>Patients</div>
        <div>
          <BiSearch
            className="py-0 mx-auto my-auto mr-0"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
      <ul className="list-group sidenav_items">
        {patients.slice(0, 12).map((patient, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <div
              className="d-flex align-items-center side_list"
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="patients rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <div>{patient.name}</div>
                <div className="d-flex gap-1">
                  <div className="">{patient.gender},</div>
                  <div>{patient.age}</div>
                </div>
              </div>
            </div>
            <button className="btn btn-link text-decoration-none">
              <BsThreeDots />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
