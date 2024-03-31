import React, { useRef } from "react";
import "./contact.css";
import {
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiMap, BiTimeFive } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Post
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjae2jk",
        "template_4pewy6e",
        form.current,
        "9VxUcLyy8iGBA5-Sj"
      )
      .then(
        (result) => {
          alert("Your message has been sent");
        },
        (error) => {
          alert("Your message has not been sent");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact spacing" id="contact">
      <h2 className="section__title">Conatct US</h2>
      <h3 className="section__subtitle">Get in touch</h3>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Conatact Info</h3>
          <div className="contact__info">
            <div className="contact__card">
              <BiMap className="contact__card-icon" />
              <p>
                Unit 14 Westside Centre
                <br />
                Model Farm Road
                <br />
                Cork
                <br />
                Ireland
                <br />
                T12 AC2H
              </p>
              <p>
                Click
                <a
                  href="https://www.google.com/maps/dir//Westside+Centre,+Unit+14+Model+Farm+Rd,+Cork,+T12+AC2H/@51.8899651,-8.6165419,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x484491fa36184565:0x7349b38a90c94aaa!2m2!1d-8.5341417!2d51.8899939?entry=ttu"
                  rel="noopener noreferrer"
                  aria-label="map"
                  target="_blank">
                  {" "}
                  <u>
                    <b>here</b>
                  </u>
                </a>{" "}
                for directions
              </p>
            </div>
            <div className="contact__card">
              <BsFillTelephoneFill className="contact__card-icon" />
              <br />
              <a href="tel://00353214544697" className="contact__card-item">
                <u>+ 353 21 4544697</u>
              </a>
            </div>
            <div className="contact__card">
              <AiOutlineMail className="contact__card-icon" />
              <br />
              <a
                href="mailto:dressmakingstudio@gmail.com"
                className="contact__card-item">
                <u>dressmakingstudio@gmail.com</u>
              </a>
            </div>
            <div className="contact__card">
              <BiTimeFive className="contact__card-icon" />
              <ul>
                <li>
                  <b>Opening Hours</b>
                </li>
                <li>
                  <b>Mond - Fri:</b> 9:30 a.m. - 6:30 p.m.
                </li>
                <li>
                  <b>Sat:</b> 9:30 a.m. - 6:30p.m.
                </li>
              </ul>
            </div>
            <div className="contact__card">
              <a
                className="contact__form-icons"
                rel="noopener noreferrer"
                aria-label="facebook link"
                href="https://www.facebook.com/treandcork"
                target="_blank">
                <BsFacebook />
              </a>{" "}
              &nbsp;
              <a
                className="contact__form-icons"
                rel="noopener noreferrer"
                aria-label="instagram link"
                href="https://www.instagram.com/trendhealthandbeautycork/"
                target="_blank">
                <BsInstagram />
              </a>{" "}
              &nbsp;
              <a
                className="contact__form-icons"
                rel="noopener noreferrer"
                aria-label="twitter link"
                href="https://twitter.com/TrendCork"
                target="_blank">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Contact Form</h3>
          <span className="booking_info">
            <AiOutlineInfoCircle className="booking_info-icon" />
            If you have any questions or need to inquire about product
            availability, please feel free to reach out to us, and we will
            respond to you promptly.Thank you
          </span>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your name"
                required></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
                required></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Phone</label>
              <input
                type="tel"
                name="phone"
                className="contact__form-input"
                placeholder="Your phone number"
                required></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Prefered Date & Time</label>
              <input
                type="date"
                name="date"
                className="contact__form-input"></input>
              <input
                type="time"
                name="appt"
                min="09:00"
                max="18:00"
                className="contact__form-input"></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Your message"
                required></textarea>
            </div>
            <button className="button button--flex">
              Send <AiOutlineSend className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
