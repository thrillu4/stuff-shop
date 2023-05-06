import React from "react";
import { Link } from "react-router-dom";

import s from "../../styles/Header.module.css";

import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.jpg";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.user}>
          <div
            className={s.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={s.username}>Silvana</div>
        </div>
        <form className={s.form}>
          <div className={s.icon}>
            <svg className="icon">
              <use
                xlinkActuate={`${process.env.PUBLIC_URL}/sprite.svg#search`}
              />
            </svg>
          </div>
          <div className={s.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              value=""
              onChange={() => {}}
            />
          </div>
          {false && <div className={s.box}></div>}
        </form>
        <div className={s.account}>
          <Link to={ROUTES.HOME} className={s.favourites}>
            <svg className={s["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={s.cart}>
            <svg className={s["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
          </Link>
          <span className={s.count}>2</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
