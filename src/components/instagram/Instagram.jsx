import React from "react";

const Instagram = () => {
  return (
    <section className="instagram section">
      <h2 className="section__title">Instagram</h2>
      <h3 className="section__subtitle">
        Follow us on instagram for more up to date offers and news
      </h3>
      <div className="instagram__container container grid">
        <a
          rel="noopener noreferrer"
          aria-label="instagram link"
          href="https://www.instagram.com/trendhealthandbeautycork/"
          target="_blank">
          <img
            src={require("../../assets/instagram.jpg")}
            alt="instagram"
            title="instagram"
            className=""
            width="1284"
            height="840"
          />
        </a>
      </div>
    </section>
  );
};

export default Instagram;
