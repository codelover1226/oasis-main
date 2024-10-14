"use-client";
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
const images = [
  "/img/carousel/1.jpg",
  "/img/carousel/2.jpg",
  "/img/carousel/3.jpg",
  "/img/carousel/4.jpg",
  "/img/carousel/5.jpg",
  "/img/carousel/6.jpg",
  "/img/carousel/7.jpeg",
  "/img/carousel/8.jpg",
  "/img/carousel/9.jpg"
]
interface SelectProps {}

const CustomCarousel: React.FC<SelectProps> = () => {
  return (
    <div className="w-full h-full">
      <Carousel className="w-full">
        {images.map((im, index) => (
          <Carousel.Item key={index} className="h-[500px]">
          <Image
            className="d-block "
            src={im} // Replace with your image path
            alt="First slide"
            layout="fill"
            objectFit="cover"
          />
          <Carousel.Caption>
            {/* <h3>First Slide Label</h3>
            <p>Some description for the first slide.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
