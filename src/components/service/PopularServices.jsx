import React from "react";
import "./services.css";

const PopularServices = () => {
  return (
    <div className="pservices">
      <h1>Our Popular Services</h1>
      <p>We offer a wide range of services.</p>
      <div className="pservices__container custom-container grid">
        <div className="pservices__inner">
          <img
            src={require("../../assets/dress-making.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Dress Making</span>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/seat-cover.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Seat Covers</span>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/tailoring.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Tailoring</span>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/alterations.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Alterations</span>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/wedding-dress.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Wedding Dresses</span>
            <p></p>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/upolestry.jpg")}
            alt="Profile"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Upolestry Services</span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
