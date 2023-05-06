import React from "react";
import { Link } from "react-router-dom";

import s from "../../styles/Footer.module.css";

import logo from "../../images/logo.svg";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={s.rights}>
        Developed by{" "}
        <a href="https://github.com/thrillu4" target="_blank" rel="noreferrer">
          thrillu4
        </a>
      </div>
      <div className={s.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
