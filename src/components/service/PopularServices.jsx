import React, { useState } from "react";
import "./services.css";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

const PopularServices = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="pservices">
      <h1>Our Popular Services</h1>
      <p>We offer a wide range of services.</p>
      <div className="pservices__container custom-container grid">
        <div className="pservices__inner">
          <img
            src={require("../../assets/dress-making.jpg")}
            alt="serivce dressmaking"
            title="Profile"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <span>Dress Making</span>
            <p></p>
          </div>
          <span className="service__button" onClick={() => toggleTab(5)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 5
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <div className="services__modal-items">
                <div className="services__modal-inner">
                  <h3 className="services__modal-title">Custom dresses</h3>
                  <p className="services__modal-description">
                    Prices for courses of 6 laser treatments
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/about.jpg")}
                    alt="About Us"
                    title="About Us"
                    className="service__img"
                    width="500"
                    height="333"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pservices__inner">
          <img
            src={require("../../assets/seat-cover.jpg")}
            alt="seat cover"
            title="seat cover"
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
            alt="tailoring"
            title="tailoring"
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
            alt="alteration"
            title="Proalteration"
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
            alt="wedding dress"
            title="wedding dress"
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
            alt="upolestry"
            title="upolestry"
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
