import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import StoryIcon from "../storyIcon";
import "./style.css";
import images from '../StoryImages/images'

const StorySlider = () => {
  return (
    <>
      <Carousel show={10.5} slide={3} swiping={true} className="corousel">
        {images.map((image)=>{
         return <StoryIcon src={image}/>
        })}
      </Carousel>
    </>
  );
};

export default StorySlider;
