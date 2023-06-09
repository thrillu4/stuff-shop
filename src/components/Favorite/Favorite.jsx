import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFavorite } from "../../features/user/userSlice";

import s from "../../styles/Cart.module.css";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector(({ user }) => user);

  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id));
  };

  return (
    <section className={s.cart}>
      <h2 className={s.title}>Favorite</h2>
      {!favorite.length ? (
        <div className={s.empty}>Here is empty</div>
      ) : (
        <>
          <div className={s.list}>
            {favorite.map((item) => {
              const { title, category, images, id } = item;

              return (
                <div className={s.item} key={id}>
                  <div
                    className={s.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={s.info}>
                    <h3 className={s.name}>{title}</h3>
                    <div className={s.category}>{category.name}</div>
                  </div>

                  <div className={s.close}>
                    <div
                      className={s.close}
                      onClick={() => removeItem(item.id)}
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.actions}>
            <button className={s.proceed}>Get the loot</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Favorite;
