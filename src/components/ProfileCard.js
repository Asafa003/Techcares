import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { BsGenderFemale } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlinePhone, MdOutlineLocalPhone } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";

const ProfileCard = ({ patient }) => {
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
    <div>
      <div className="card text-center">
        <div className="card-body">
          <img
            src={patients[3].profile_picture}
            alt={patients.profile_picture}
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="card-title manrope-unique-weight-800 mb-4">
            {patients[3].name}
          </h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <BiCalendar />
              <span className="ms-2">
                Date Of Birth: {patients[3].date_of_birth}
              </span>
            </li>
            <li className="mb-2">
              <BsGenderFemale />
              <span className="ms-2">Gender: {patients[3].gender}</span>
            </li>
            <li className="mb-2">
              <MdOutlinePhone />
              <span className="ms-2">
                Contact Info: {patients[3].phone_number}
              </span>
            </li>
            <li className="mb-2">
              <MdOutlineLocalPhone />
              <span className="ms-2">
                Emergency Contacts: {patients[3].emergency_contact}
              </span>
            </li>
            <li className="mb-2">
              <GoShieldCheck />
              <span className="ms-2">
                Insurance Provider: {patients.insurance_type}
              </span>
            </li>
          </ul>
          <button className="btn info">Show All Information</button>
        </div>
      </div>
      <div className="container mt-5">
      <div className="card">
        <div className="card-header manrope-unique-weight-800">
          Lab Results
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center manrope-unique-weight-400" >

            <span className="mr-5">
            {patients[3].lab_results[0] }
            </span>
              <button className="btn btn-link">
              <PiDownloadSimpleBold/>
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" >
            {patients[3].lab_results[1]}
              <button className="btn btn-link">
              <PiDownloadSimpleBold/>
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" >
            {patients[3].lab_results[2]}
              <button className="btn btn-link">
                <PiDownloadSimpleBold/>
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" >
            {patients[3].lab_results[3]}
              <button className="btn btn-link">
              <PiDownloadSimpleBold/>
              </button>
            </li>
            
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
