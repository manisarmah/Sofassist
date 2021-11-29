import React from "react";
import classes from "./loader.module.css";
import image from "./loader.svg";

const Home = () => {
  return (
    <div class={classes.loader}>
      <img src={image} alt="" className={classes.image} />
      <div class={classes.loader__element}></div>
    </div>
  );
};

export default Home;
