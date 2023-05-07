import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Poster from "../Poster/Poster";
import Products from "../Products/Products.js";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filteredByPrice } from "../../features/products/productsSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less then 100$" />
    </>
  );
};

export default Home;
