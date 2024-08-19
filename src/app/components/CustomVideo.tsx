"use-client";
import React from "react";
const video_url =  '/birds.mp4';


interface CustomVideoProps {}

const CustomVideo: React.FC<CustomVideoProps> = () => {
  return (
    <div className="w-[80%] m-auto">
      <video width={1000} controls autoPlay>
        <source src={video_url}  type="video/mp4" />
        your browser does not support the video tag
      </video>
      </div>
  );
};

export default CustomVideo;
