import React, { useState } from "react";
import "./services.css";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

const PopularServices = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="pservices section" id="services">
      <h1 className="section__title">Our Popular Services</h1>
      <p className="section__subtitle">We offer a wide range of services.</p>
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
            <h4>Dress Making</h4>
          </div>
          <span className="service__button" onClick={() => toggleTab(1)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
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
                  <h3 className="services__modal-title">Dress Making</h3>
                  <p className="services__modal-description">
                    Experience elegance like never before with our dress-making
                    service. Our highly experienced dressmaker, boasting 10
                    years of expertise, ensures each garment is crafted to
                    perfection. Using only the finest materials, we tailor
                    exquisite attire for every occasion, be it weddings, proms,
                    or any special event. Entrust us with your vision, and we'll
                    transform it into a masterpiece you'll cherish forever.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/dress-making1.jpg")}
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
            <h4>Seat Covers</h4>
          </div>
          <span className="service__button" onClick={() => toggleTab(2)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
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
                  <h3 className="services__modal-title">Seat Covers</h3>
                  <p className="services__modal-description">
                    We specialize in crafting seat covers for a range of
                    vehicles including cars, vans, trucks, SUVs, minibuses, and
                    people carriers. Our product is designed to safeguard your
                    original upholstery from damage and spills, making it kid
                    and pet friendly. Utilizing antibacterial and waterproof
                    leatherette, our covers ensure longevity, resembling real
                    leather at a fraction of the cost. With a snug fit
                    guaranteed not to move, each cover is tailored specifically
                    to your vehicle model, maintaining all original features and
                    functions such as isofix, airbags, heating, and cooling.
                    Enhanced with extra padding for comfort, choose from a
                    variety of colors and materials to suit your preferences.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/seats.jpg")}
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
            src={require("../../assets/tailoring.jpg")}
            alt="tailoring"
            title="tailoring"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h4>Tailoring</h4>
          </div>
          <span className="service__button" onClick={() => toggleTab(3)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
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
                  <h3 className="services__modal-title">Tailoring</h3>
                  <p className="services__modal-description">
                    Indulge in our bespoke tailoring services for suits,
                    jackets, and coats, where precision meets elegance. With
                    over 16 years of expertise, our tailor ensures every garment
                    is meticulously crafted to perfection. Using only the finest
                    products and materials, we guarantee a superior fit and
                    unparalleled quality in every stitch.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/tailoring1.jpg")}
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
            src={require("../../assets/alterations.jpg")}
            alt="alteration"
            title="Proalteration"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h4>Alterations</h4>
          </div>
          <span className="service__button" onClick={() => toggleTab(4)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 4
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
                  <h3 className="services__modal-title">Alterations</h3>
                  <p className="services__modal-description">
                    Discover our alteration services, where we specialize in
                    refining garments to fit you perfectly. Whether it's
                    adjusting the length, tapering seams, or restyling, our
                    skilled team ensures impeccable results. Trust us to enhance
                    the fit and comfort of your clothing, tailored to your exact
                    specifications.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/alterations1.jpg")}
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
            src={require("../../assets/wedding-dress.jpg")}
            alt="wedding dress"
            title="wedding dress"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h4>Wedding Dresses</h4>
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
                  <h3 className="services__modal-title">Wedding Dresses</h3>
                  <p className="services__modal-description">
                    Experience the epitome of bridal elegance with our wedding
                    dress making and alteration services. From crafting
                    custom-designed gowns that reflect your unique style to
                    expertly tailoring existing dresses to perfection, we ensure
                    you radiate beauty on your special day. Trust our skilled
                    team to bring your bridal vision to life with meticulous
                    attention to detail and a commitment to excellence.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/wedding-dress.jpg")}
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
            src={require("../../assets/upolestry.jpg")}
            alt="upolestry"
            title="upolestry"
            className="services__img"
            width="300"
            height="225"
          />
          <div className="pservices__inner-content">
            <h4>Upholestry</h4>
          </div>
          <span className="service__button" onClick={() => toggleTab(6)}>
            View Service
            <AiOutlineArrowRight className="service__button-icon" />
          </span>
          <div
            className={
              toggleState === 6
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
                  <h3 className="services__modal-title">Upolestry</h3>
                  <p className="services__modal-description">
                    Transform your space with our upholstery services, where we
                    breathe new life into your furniture. Whether it's restoring
                    cherished pieces to their former glory or giving them a
                    fresh look with modern fabrics, our skilled craftsmen
                    deliver exceptional results. Trust us to revitalize your
                    upholstery with precision and care, enhancing the beauty and
                    comfort of your home or office.
                  </p>
                </div>
                <div>
                  <img
                    src={require("../../assets/upholstery.jpg")}
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
      </div>
    </div>
  );
};

export default PopularServices;
