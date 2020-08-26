import React from "react";
import "./footer.styles.css";

import { FooterLogo } from "./footer.styles";
import footerLogo from "../../assets/footer/logoFooter.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <h3 className="send">SEND</h3>
      <h1 className="enterThePetiverse">ENTER THE PETIVERSE</h1>
      <input
        className="footerInput"
        type="textInput"
        placeholder="Email"
      ></input>
      <FooterLogo src={footerLogo}></FooterLogo>

      <h3 className="instagram">Instagram</h3>
      <h3 className="facebook">Facebook</h3>

      <h3 className="aboutUs">About Us</h3>
      <h3 className="missionAndVision">Mission and Vision</h3>
      <h3 className="community">Community</h3>
      <h3 className="securityAndPrivacy">Security and Privacy</h3>
      <h3 className="termsOfUse">Terms of Use</h3>

      <h3 className="contactUs">Contact Us</h3>
      <h3 className="shipping">Shipping</h3>
      <h3 className="returns">Returns</h3>
    </div>
  );
};

export default Footer;
