import React from "react";

import s from "../../styles/Home.module.css";

import bg from "../../images/banner.png";

const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={s.left}>
        <p className={s.content}>
          NEW YORK
          <span>SALE</span>
          <button className={s.more}>See more</button>
        </p>
      </div>
      <div className={s.right} style={{ backgroundImage: `url(${bg})` }}>
        <p className={s.discount}>
          save up to <span>50%</span> off
        </p>
      </div>
    </section>
  );
};

export default Banner;
