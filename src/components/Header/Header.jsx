import { Link, useNavigate } from "react-router-dom";

import s from "../../styles/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.jpg";
import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../../features/user/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({ name: "Silvana", avatar: avatar });
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.user} onClick={handleClick}>
          <div
            className={s.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          ></div>
          <div className={s.username}>{values.name}</div>
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
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
          {searchValue && (
            <div className={s.box}>
              {isLoading
                ? "Loading.."
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        to={`/products/${id}`}
                        className={s.item}
                      >
                        <div
                          className={s.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={s.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
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
