import React from "react";
import "./services.css";

const PopularServices = () => {
  return (
    <div className="pservices">
      <h1>Services</h1>
      <p>We offer a wide range of services.</p>
      <div className="pservices__container custom-container grid">
        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Dress Making</h2>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Seat Covers</h2>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Tailoring</h2>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Alterations</h2>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Wedding Dresses</h2>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/about.jpg")}
            alt="Profile"
            title="Profile"
            className="about__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h2>Upolestry Services</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
