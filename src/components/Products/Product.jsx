import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import s from "../../styles/Product.module.css";
import {
  addItemsToCart,
  addItemsToFavorite,
} from "../../features/user/userSlice";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
  const { images, title, price, description } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCard = () => {
    dispatch(addItemsToCart(item));
  };

  const addToFavorite = () => {
    dispatch(addItemsToFavorite(item));
  };

  return (
    <section className={s.product}>
      <div className={s.images}>
        <div
          className={s.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={s["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={s.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price}$</div>
        <div className={s.sizes}>
          <span>Sizes:</span>
          <div className={s.list}>
            {SIZES.map((size) => (
              <div
                className={`${s.size} ${currentSize === size ? s.active : ""}`}
                onClick={() => setCurrentSize(size)}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.actions}>
          <button onClick={addToCard} disabled={!currentSize} className={s.add}>
            Add to cart
          </button>
          <button onClick={addToFavorite} className={s.favorites}>
            Add to favorites
          </button>
        </div>

        <div className={s.bottom}>
          <div className={s.purchase}>19 people purchased</div>
          <Link to="/">Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
