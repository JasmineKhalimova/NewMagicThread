import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__div footer__container-inner grid">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>T&C</li>
          <li>Privacy Policy</li>
          <li>Shipping</li>
        </ul>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="footer__div footer__inner grid">
        <div className="copyrights">
          <p>
            Copyright© {new Date().getFullYear()}{" "}
            <a href="https://www.magicthreadcork.com/">Magic Thread Cork</a>{" "}
          </p>
        </div>
        <div className="developed">
          <p>
            Designed & Developed by{" "}
            <b>
              <u>
                <a href="https://www.web-brickdesign.com/">Web-Brick Design</a>
              </u>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
