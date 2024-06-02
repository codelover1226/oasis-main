'use client'

import React from "react"
import Image from "next/image";
import team1 from './../assets/image/team/team1.jpg'
import team2 from './../assets/image/team/team2.jpg'
import team3 from './../assets/image/team/team3.jpg'
import team4 from './../assets/image/team/team4.jpg'
import team5 from './../assets/image/team/team5.jpg'

export default function City() {

  return(
    <>
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
          A COMMITMENT TO EXCELLENCE
        </p>
      </div>
      <div className=" w-full flex">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full sm:flex sm:mt-12 sm:space-x-16">
            <div className="text-left my-6">
              <Image alt="" src={team1} width={100} className="px-3 sm:px-0"/>
              <p className="text-lg my-6 font-ivy-mode px-3 sm:px-0 font-semibold">RESIDENTS LOUNGE</p>
              <p className="text-[16px] font-spartan px-3 sm:px-0">Noble’s glass-enclosed Residents Lounge boasts high ceilings, custom millwork, a Porcelanosa catering kitchen, and a large smart screen. Ideal for daytime remote work or evening entertainment, the Noble’s lounge is the perfect extension of your home.</p>
            </div>
            <div className="text-left my-6">
              <Image alt="" src={team2} width={100} className="px-3 sm:px-0"/>
              <p className="text-lg my-6 font-ivy-mode px-3 sm:px-0 font-semibold">ROOF TERRACES</p>
              <p className="text-[16px] font-spartan px-3 sm:px-0">Noble residents enjoy outdoor grilling and panoramic Manhattan skyline views from the 4,200-sq-ft landscaped roof deck. The 2nd floor also offers three common open spaces totaling more than 3,000 sq ft, an oasis for Noble residents.</p>
            </div>
            <div className="text-left my-6">
              <Image alt="" src={team3} width={100} className="px-3 sm:px-0"/>
              <p className="text-lg my-6 font-ivy-mode px-3 sm:px-0 font-semibold">FITNESS CENTER</p>
              <p className="text-[16px] font-spartan px-3 sm:px-0">The fitness center consists of indoor and outdoor areas. The indoor gym includes the latest cardio and strength equipment by Octane, True and Hudson Steel. You can bring your workout outdoors to the 997-sq-ft fitness terrace.</p>
            </div>
          </div>
          <div className="sm:w-[60%] sm:flex sm:mt-12 mx-auto">
            <div className="text-left my-6 sm:mx-8">
              <Image alt="" src={team4} width={100} className="px-3 sm:px-0"/>
              <p className="text-lg my-6 font-ivy-mode px-3 sm:px-0 font-semibold">LATCH</p>
              <p className="text-[16px] font-spartan px-3 sm:px-0">Latch enhances your quality of living by incorporating features such as keyless entry for residential units, remote intercom access, and secure
      package room entry.</p>
            </div>
            <div className="text-left my-6 sm:mx-8">
              <Image alt="" src={team5} width={100} className="px-3 sm:px-0"/>
              <p className="text-lg my-6 font-ivy-mode px-3 sm:px-0 font-semibold">PERSONAL STORAGE</p>
              <p className="text-[16px] font-spartan px-3 sm:px-0">With your own onsite storage locker, you can keep your personal belongings tucked safely away. </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}