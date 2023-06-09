import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import Products from "../Products/Products";

import s from "../../styles/Category.module.css";
import { useSelector } from "react-redux";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };
  const [isEnd, setIsEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState(defaultParams);
  const [values, setValues] = useState(defaultValues);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;
    setParams({ ...defaultParams, categoryId: id });
    setValues(defaultValues);
    setItems([]);
    setIsEnd(false);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (isLoading) return;
    if (!data.length) return setIsEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);

    setCat(category);
  }, [id, list]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.price_max === 0 && values.title === "" && values.price_min === 0)
      return;
    setItems([]);
    setIsEnd(false);
    setValues(defaultValues);
    setParams({ ...params, ...values });
  };
  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>{cat?.name}</h2>
      <form className={s.filters} onSubmit={handleSubmit}>
        <div className={s.filter}>
          <input
            type="text"
            name="title"
            placeholder="Product me"
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className={s.filter}>
          <input
            type="number"
            name="price_min"
            placeholder="0"
            onChange={handleChange}
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={s.filter}>
          <input
            type="number"
            name="price_max"
            placeholder="0"
            onChange={handleChange}
            value={values.price_max}
          />
          <span>Price to</span>
        </div>
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <div className={s.preloader}></div>
      ) : !isSuccess || !items.length ? (
        <div className={s.back}>
          <span>No Result</span>
          <button
            onClick={() => {
              setValues(defaultValues);
              setParams(defaultParams);
              setIsEnd(false);
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <Products
          title=""
          amount={items.length}
          products={items}
          style={{ padding: 0 }}
        />
      )}
      {!isEnd && (
        <div className={s.more}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
