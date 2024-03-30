import React from "react";
import "./about.css";
import "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about section spacing" id="about">
      <h2 className="section__title"> About Us</h2>
      <h3 className="section__subtitle">Company History</h3>
      <div className="about__container custom-container grid">
        <div className="about__data">
          <p>
            Magic Thread Cork was founded in 2015. Our team, though small,
            boasts years of expertise. We excel in crafting bespoke dresses and
            wedding gowns, performing alterations, designing suits, car seats,
            bike seats, and various other vehicle seats, as well as creating
            clothing designs. Continuously honing our skills and staying abreast
            of the latest fashion trends, our skilled and seasoned specialists
            deliver top-notch quality work consistently.
          </p>
          <p>
            Whether you're in need of a stunning wedding dress, elegant
            mother-of-the-bride attire, charming bridesmaid dresses,
            sophisticated cocktail dresses, beautiful Debs, Confirmation and
            Communion dresses, vibrant Irish dancing dresses, or captivating
            fancy costumes, we have you covered.
          </p>
        </div>
        <img
          src={require("../../assets/about.jpg")}
          alt="About Us"
          title="About Us"
          className="about__img"
          width="500"
          height="333"
        />
      </div>
    </section>
  );
};

export default About;
