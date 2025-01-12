import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  FaCopyright,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  const [currentyear, setCurrentYear] = useState();

  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    setCurrentYear(year);
    console.log(currentyear);
  }, []);

  return (
    <>
      

      <div className="container-fluid footer_background">
        <div className="row text-white">
          <div className="col-lg-5">
          <h5 className="footer_text">candle Genie</h5>
          <p className="footer_P">
              Grow you assets while playing fun games. Powered by blockchain
              technology.
            </p>
            <div className="footer_icons">
            <FaTelegramPlane color="white" size="25px" />
            <FaTwitter color="white" size="25px"  className="ms-4"/>
            <FaYoutube color="white" size="25px"  className="ms-4"/>
            </div>
            <div className="d-flex footer_copywrite">
              <FaCopyright color="white" size="25px" />-{currentyear}_<p>Candle Genie - All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </>
  );
}
