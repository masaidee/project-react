import React from "react";
import "./style.css";
import "./style-color.css";
import MyIcon1 from "../img/2807710.jpg";
import MyIcon2 from "../img/arrow.png";
import MyIcon3 from "../img/v.png";

function Container() {

  return (
    <div className="jus-between m-100 ">
      <div className=" w-full pl-100">
        <div className="jus-start pt-10">
          <p className="bg-indian-red white  p-10 border-radius-full text-white">50% OFF</p>
          <p className="text-red indian-red p-10">LEAEN FROM TODAY</p>
        </div>
        <div className="fs-26">
          <h1>The Best Way For</h1>
          <div className="jus-start gap-10">
            <h1>Tour Learning</h1>
            <img className="w-50" src={MyIcon1} alt="" />
          </div>
          
        </div>
        <div  className="bls-solid btc-gray pl-10 mt-20 mb-20" >
          <p>There are many variation of passages of lorem lpsum available, but the</p>
          <p>majority have suffered alteration</p>
        </div>
        <div className="jus-start gap-10 align-center">
          <div className="jus-center bg-teal white p-10 border-radius-full gap-5">
            <div>Explore Courses</div>
            <img className="w-20 " src={MyIcon2} alt="" />
          </div>
          <div className="jus-center p-20 align-center gap-5">
            <img className="w-50 bg-gold border-radius-full" src={MyIcon3} alt="" />
            <div className="bbs-solid">Watch Demo</div>
          </div>
        </div>
      </div>
      <div className="w-full " >
        <img className="w-full" src={MyIcon1} alt="" />
      </div>
    </div>
  );
}

export default Container;
