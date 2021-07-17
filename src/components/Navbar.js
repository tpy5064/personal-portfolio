import React from "react";
import { FaUser, FaUserGraduate, FaMedal, FaPhone } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">YTQ</span>
            <MdKeyboardArrowRight className="logo-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUser className="nav-icons glow" />
            <span className="link-text glow">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaMedal className="nav-icons glow" />
            <span className="link-text glow">Experience</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaUserGraduate className="nav-icons glow" />
            <span className="link-text glow">Education</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaPhone className="nav-icons glow" />
            <span className="link-text glow">Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <HiDotsVertical className="nav-icons" />
            <span className="link-text glow">Extras</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
