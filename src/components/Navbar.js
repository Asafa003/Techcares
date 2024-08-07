import React, { useState, useEffect } from "react";
import "../styles.css";
import logo from "../assets/TestLogo.png";
import Doctor from "../assets/snr woman small.png";
import { Link, useLocation } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  BiHome,
  BiUser,
  BiCalendar,
  BiChat,
  BiCreditCard,
} from "react-icons/bi";

const NavBar = () => {
  const location = useLocation();
  const [active, setActive] = useState("patients");
  const [links] = useState([
    { link: "overview", path: "/overview" },
    { link: "patients", path: "/" },
    { link: "schedule", path: "/schedule" },
    { link: "message", path: "/message" },
    { link: "transactions", path: "/transactions" },
  ]);

  useEffect(() => {
    const pathname = location.pathname;
    const matchingLink = links.find((link) => link.path === pathname);
    if (matchingLink) {
      setActive(matchingLink.link);
    }
  }, [location.pathname, links]);

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-2 mt-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Tech.Care"
            style={{ width: "211px", height: "48px" }}
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {links.map((navItem) => (
              <li className="nav-item" key={navItem.link}>
                <Link
                  to={navItem.path}
                  className={`nav-link ${
                    navItem.link === active ? "active" : ""
                  }`}
                  onClick={() => handleClick(navItem.link)}
                >
                  <div
                    className={`d-flex align-items-center p-2  ${
                      navItem.link === active ? "actives" : ""
                    }`}
                  >
                    {navItem.link === "overview" && (
                      <BiHome
                        style={{
                          marginRight: "3px",
                          width: "25px",
                          height: "25px",
                          paddingBottom: "3px",
                        }}
                      />
                    )}
                    {navItem.link === "patients" && (
                      <BiUser
                        style={{
                          marginRight: "3px",
                          width: "25px",
                          height: "25px",
                          paddingBottom: "3px",
                        }}
                      />
                    )}
                    {navItem.link === "schedule" && (
                      <BiCalendar
                        style={{
                          marginRight: "3px",
                          width: "25px",
                          height: "25px",
                          paddingBottom: "3px",
                        }}
                      />
                    )}
                    {navItem.link === "message" && (
                      <BiChat
                        style={{
                          marginRight: "3px",
                          width: "25px",
                          height: "25px",
                          paddingBottom: "3px",
                        }}
                      />
                    )}
                    {navItem.link === "transactions" && (
                      <BiCreditCard
                        style={{
                          marginRight: "3px",
                          width: "25px",
                          height: "25px",
                          paddingBottom: "3px",
                        }}
                      />
                    )}
                    <span>
                      {navItem.link.charAt(0).toUpperCase() +
                        navItem.link.slice(1)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <img
              src={Doctor}
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
              alt="Doctor"
            />
            <div className="ms-2">
              <div>Dr. Jose Simmons</div>
              <small>General Practitioner</small>
            </div>
            <button
              className="btn btn-link text-decoration-none ms-3 me-0"
              type="button"
            >
              <FaCog style={{ color: "#072635" }} />
            </button>
            <button
              className="btn btn-link text-decoration-none p-0"
              type="button"
            >
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
