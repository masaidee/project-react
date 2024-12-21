import React from "react";
import { Link } from "react-router-dom";
import MyIcon1 from "../img/graduation-cap.png";
import MyIcon2 from "../img/loupe.png";
import MyIcon3 from "../img/internet.png";
import "./style.css";
import "./style-color.css";

function Header() {
  return (
    <div className="jus-around p-30 bg-light-blue align-center">
      {/* โลโก้และชื่อเว็บไซต์ */}
      <div className="jus-center align-center gap-10">
        <img className="w-30" src={MyIcon1} alt="Graduation Cap Icon" />
        <div className="font-weight-extra-bold fs-24">Edumem</div>
      </div>

      {/* เมนูนำทาง */}
      <div className="gap-50 jus-center primary-red">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/courses">Courses</Link></div>
        <div><Link to="/instructor">Instructor</Link></div>
        <div><Link to="/contact">Contact</Link></div>
      </div>

      {/* ไอคอนและปุ่มเข้าสู่ระบบ */}
      <div className="jus-center gap-20 align-center">
        <img className="w-30" src={MyIcon2} alt="Search Icon" />
        <img className="w-30" src={MyIcon3} alt="Internet Icon" />
        <div className="bg-gold p-10 border-radius-full text-white">Login/Register</div>
      </div>
    </div>
  );
}

export default Header;
