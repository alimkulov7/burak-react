import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import Advertisement from "./Advertisement";
import '../../../css/home.css';

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrieveNewDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) =>
     dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrieveNewDishes,
  (popularDishes) => ({popularDishes})
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector:  Store => Data
  
  useEffect(() => {}, []);

  return <div className="homepage">
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers /> 
    <Events />
  </div>;
};