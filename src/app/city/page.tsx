'use client'
import React, {useState} from "react"

import Image, { StaticImageData } from 'next/image';
import Image1 from "./../assets/image/gallery/image1.jpg"
import Image2 from "./../assets/image/gallery/image2.jpg"
import Image3 from "./../assets/image/gallery/image3.jpg"
import Image4 from "./../assets/image/gallery/image4.jpg"
import Image5 from "./../assets/image/gallery/image5.jpg"
import Image6 from "./../assets/image/gallery/image6.jpg"
import Image7 from "./../assets/image/gallery/image7.jpg"
import Image8 from "./../assets/image/gallery/image8.jpg"
import Image9 from "./../assets/image/gallery/image9.jpg"
import Image10 from "./../assets/image/gallery/image10.jpg"
import Image11 from "./../assets/image/gallery/image11.jpg"
import Image12 from "./../assets/image/gallery/image12.jpg"
import Image13 from "./../assets/image/gallery/image13.jpg"
import Image14 from "./../assets/image/gallery/image14.jpg"
import Image15 from "./../assets/image/gallery/image15.jpg"
import Image16 from "./../assets/image/gallery/image16.jpg"

interface ImageData {
  title: string;
  description: string;
  src: StaticImageData; 
}

export default function City () {
  
  const [isOpen, setIsOpen] = useState<boolean | null>(true)
  const [current, setCurrent] = useState<string | null> ('Image1')
  const [prev, setPrev] = useState<string | null> ('Image17')
  const [next, setNext] = useState<string | null> ('Image2')
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images: ImageData[] = [
    {
      title: "Image1",
      description: "Description for Image1",
      src: Image1,
    },
    {
      title: "Image2",
      description: "Description for Image2",
      src: Image2,
    },
    ,
    {
      title: "Image3",
      description: "Description for Image3",
      src: Image3,
    },
    {
      title: "Image4",
      description: "Description for Image4",
      src: Image4,
    },
    {
      title: "Image5",
      description: "Description for Image5",
      src: Image5,
    },
    {
      title: "Image6",
      description: "Description for Image6",
      src: Image6,
    },
    {
      title: "Image7",
      description: "Description for Image7",
      src: Image7,
    },
    {
      title: "Image8",
      description: "Description for Image8",
      src: Image8,
    },
    {
      title: "Image9",
      description: "Description for Image9",
      src: Image9,
    },
    {
      title: "Image10",
      description: "Description for Image10",
      src: Image10,
    },
    {
      title: "Image11",
      description: "Description for Image11",
      src: Image11,
    },
    {
      title: "Image12",
      description: "Description for Image12",
      src: Image12,
    },
    {
      title: "Image13",
      description: "Description for Image13",
      src: Image13,
    },
    {
      title: "Image14",
      description: "Description for Image14",
      src: Image14,
    },
    {
      title: "Image15",
      description: "Description for Image15",
      src: Image15,
    },
    {
      title: "Image16",
      description: "Description for Image16",
      src: Image16,
    }
  ];
  return (
    <>
      {
        isOpen ? 
        <div className="fixed right-0 left-0 top-0 bottom-0 z-50">
          <div className="absolute right-0 left-0 bottom-0 top-0 bg-black opacity-70"></div>
          
          <div className="w-full h-[100vh] absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute right-6 top-6">
              <p className="text-white text-lg font-spartan cursor-pointer" onClick={() => {setIsOpen(false)}}>X</p>
            </div>
            <div className="w-full h-full">
              <div className="w-[calc(100vw-48px)] md:w-[calc(100vw-240px)] mx-[24px] md:mx-[120px] h-[calc(100vh-120px)] my-[60px] md:h-[calc(100vh-240px)] md:my-[120px]">
                
              </div>
            </div>
          </div>
        </div> 
        :
        <></>
      }
      
      <div className="bg-main-bg w-full">
        <div className="w-full h-[600px] bg-black opacity-70" style={{ backgroundImage: "url('/img/oasis_exterior1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="bg-black opacity-40 absolute top-0 left-0 right-0 h-[600px]">
        </div>
        <div className="relative h-[80px] w-full text-center items-center mb-0">
          <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">Noble LIC 1st Place Winner <span><a className="underline cursor-pointer">2024 AIA Design Awards</a></span> </p>
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
        </div>
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          CITY PAGE
        </p>
      </div>
    </>
  )
}