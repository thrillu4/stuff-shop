import React from "react";

import s from "../../styles/Home.module.css";

import bg from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={s.home}>
      <div className={s.title}>BIG SALE 20%</div>
      <div className={s.product}>
        <div className={s.text}>
          <div className={s.subtitle}>the bestseller of 2022</div>
          <h1 className={s.head}>LENOVO R2D2 with NVIDIA 5090 TI</h1>
          <button className={s.button}>Shop now</button>
        </div>
        <div className={s.image}>
          <img src={bg} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
