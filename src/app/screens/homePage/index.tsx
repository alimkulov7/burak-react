import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import Advertisement from "./Advertisement";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductServise";
import { ProductCollection } from "../../../lib/enums/product.enums";
import '../../../css/home.css';


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) =>
     dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});

export default function HomePage() {
  const { setPopularDishes, setNewDishes} = actionDispatch(useDispatch());
  // Selector:  Store => Data
  
  useEffect(() => {
    const product = new ProductService;
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.DISH,
    }).then(data=>{
      setPopularDishes(data);
    }).catch((err) => console.log(err));

    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
      productCollection: ProductCollection.DISH,
    }).then(data=>{
      setNewDishes(data);
    }).catch((err) => console.log(err));
  }, []);


  return <div className="homepage">
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers /> 
    <Events />
  </div>;
};