import React from "react";
import MyIcon1 from "../img/graduation-cap.png";
import MyIcon2 from "../img/loupe.png";
import MyIcon3 from "../img/internet.png";
import "./style.css";
import "./style-color.css";
function Header() {
  return (
    <div className="jus-around p-30 bg-light-blue align-center">
      <div className="jus-center align-center gap-10" >
        <img className="w-30" src={MyIcon1} alt="" />
        <div className="font-weight-extra-bold fs-24" >Edumem</div>
      </div>
      <div className="gap-50 jus-center" >
        <div>Home</div>
        <div>About</div>
        <div>Conrses</div>
        <div>Instructor</div>
        <div>Contact</div>
      </div>
      <div className="jus-center gap-20 align-center">
        <img className="w-30" src={MyIcon2} alt="" />
        <img src={MyIcon3} alt="" />
        <div className="bg-gold p-10 border-radius-full text-white" >Login/Register</div>
      </div>
    </div>
  );
}

export default Header;
