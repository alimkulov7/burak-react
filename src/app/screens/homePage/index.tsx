import React from "react";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import Advertisement from "./Advertisement";
import '../../../css/home.css';

export default function HomePage() {
  return <div className="homepage">
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers /> 
    <Events />
  </div>;
};