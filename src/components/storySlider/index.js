import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import DarkModeIcon from "../darkModeIcon";
import "./style.css";

const StorySlider = () => {
  return (
    <>
      <Carousel show={10.5} slide={3} swiping={true} className="corousel">
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
        <DarkModeIcon />
      </Carousel>
    </>
  );
};

export default StorySlider;
