import React from "react";
import "../styles/Footer.scss";

export const Footer = () => {

    const year = new Date().getFullYear();
    return (
      <div className="footer">
        <div className="footer__title--left">
          <span className="footer__title--text">&#169; {year} Travelize</span>
        </div>
        <div className="footer__title--right">
          <span className="footer__title--text">Privacy Policy Terms and conditions</span>
        </div>
      </div>
    );
};