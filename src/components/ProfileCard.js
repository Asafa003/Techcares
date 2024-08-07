import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { BsGenderFemale } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlinePhone, MdOutlineLocalPhone } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";

const ProfileCard = () => {
  const [patients, setPatients] = useState([]);
  // const [error, setError] = useState(null);

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
        // setError(error);
      }
    };

    fetchData();
  }, []);

  // if (error) return <div>Error: {error.message}</div>;

  if (patients.length === 0) return null;

  return (
    <div>
      <div className="card border-0 text-center mb-4">
        <div className="card-body profile-card">
          <img
            src={patients[3].profile_picture}
            alt={patients.profile_picture}
            className="rounded-circle my-4"
            style={{ width: "150px", height: "150px" }}
          />
          <h5 className="card-title manrope-unique-weight-800 mb-4 mx-auto">
            {patients[3].name}
          </h5>
          <ul className="list-unstyled spec ms-2">
            <li className="mb-2">
              <div className="d-flex justify-content-start w-100 align-items-center ms-4 p-0 m-0">
                <div className="iconss me-2">
                  <BiCalendar className="" />
                </div>
                <div className="text-left">
                  <p className="text-left  mb-0">Date Of Birth:</p>
                  <p className="text-left my-0 manrope-unique-weight-600">
                    {patients[3].date_of_birth}
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex justify-content-start w-100 align-items-center ms-4">
                <div className="iconss me-2">
                  <BsGenderFemale className="mt-1" />
                </div>
                <div className="text-left">
                  <p className="text-left mt-1 mb-0">Gender:</p>
                  <p className="text-left my-0 manrope-unique-weight-600">
                    {patients[3].gender}
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex justify-content-start w-100 align-items-center ms-4">
                <div className="iconss me-2">
                  <MdOutlinePhone className="mt-1" />
                </div>
                <div className="text-left">
                  <p className="text-left mt-1 mb-0"> Contact Info:</p>
                  <p className="text-left my-0 manrope-unique-weight-600">
                    {patients[3].phone_number}
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex justify-content-start w-100 align-items-center ms-4">
                <div className="iconss me-2">
                  <MdOutlineLocalPhone className="mt-1" />
                </div>
                <div className="text-left">
                  <p className="text-left mt-1 mb-0">Emergency Contacts:</p>
                  <p className="text-left my-0 manrope-unique-weight-600">
                    {patients[3].emergency_contact}
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex justify-content-start w-100 align-items-center ms-4">
                <div className="iconss me-2">
                  <GoShieldCheck className="mt-1" />
                </div>
                <div className="text-left">
                  <p className="text-left mt-1 mb-0">Insurance Provider:</p>
                  <p className="text-left my-0 manrope-unique-weight-600">
                    {patients[3].insurance_type}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <button className="my-3 info manrope-unique-weight-800 border-0">
            Show All Information
          </button>
        </div>
      </div>
      <div className="container lab_results mt-2">
        <div className="card border-0">
          <div className="card-header manrope-unique-weight-800">
            Lab Results
          </div>
          <ul className="list-group list-group-flush profile_list">
            <li className="list-group-item d-flex justify-content-between align-items-center manrope-unique-weight-400">
              <span className="mr-5">{patients[3].lab_results[0]}</span>
              <button className="btn btn-link">
                <PiDownloadSimpleBold />
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {patients[3].lab_results[1]}
              <button className="btn btn-link">
                <PiDownloadSimpleBold />
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {patients[3].lab_results[2]}
              <button className="btn btn-link">
                <PiDownloadSimpleBold />
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {patients[3].lab_results[3]}
              <button className="btn btn-link">
                <PiDownloadSimpleBold />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
