'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from './../../assets/image/Oasis Final Logo.png'

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
      <div className={`fixed top-0 right-0 w-[330px] h-full bg-main-bg z-50 ${isOpen ? '' : 'translate-x-[330px]'} duration-300`}>
        <div className='mx-4 content-center cursor-pointer absolute right-2 top-12' onClick={() => {setIsOpen(false)}}>
          <div className='w-[24px] h-[2px] bg-black -my-[2px] rotate-45'></div>
          <div className='w-[24px] h-[2px] bg-black -my-[2px] -rotate-45'></div>
        </div>
        <div className='w-full mt-[120px] sm:mt-[240px]'>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> Building Amenities</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> RESIDENCES</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> TERRACES COLLECTION</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> LONG ISLAND CITY</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> TEAM</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> News</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode'> AVAILABLE HOMES </a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode' href='test_sign.apk'> DOWNLOAD APP</a>
          </div>
          <div className='mx-6 border-b-[1px] text-center py-3 mt-2'>
            <a className='font-semibold text-xl cursor-pointer uppercase font-ivy-mode' href='mchat.apk'> DOWNLOAD MCHAT APP</a>
          </div>
        </div>
      </div>
      <div className='w-full flex h-[100px] bg-main-bg text-center fixed z-30'>
        <div className='max-w-[1440px] w-full mx-auto flex justify-between'>
          <Image src={Logo} alt='' className='w-[220px]'/>
          <div className='w-full flex justify-end'>
            <div className='w-full content-center space-x-16 hidden sm:block text-right'>
              <a 
                href="#" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0
                  "
              >
                Amenities
              </a>
              <a 
                href="#" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0"
              >
                available homes
              </a>
              <a 
                href="#" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0"
              >
                residences
              </a>
              
              <a 
                href="#" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0"
              >
                news
              </a>
              <a 
                href="test_sign.apk" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan p-2 rounded-full
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0 bg-footer-banner after:hover:h-0"
              >
                DOWNLOAD APP
              </a>
              <a 
                href="mchat.apk" 
                className=" relative
                  text-[12px] font-bold cursor-pointer tracking-[2px] uppercase font-spartan p-2 rounded-full
                  after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0 bg-footer-banner after:hover:h-0"
              >
                DOWNLOAD MCHAT APP
              </a>
            </div>
            <div className='mx-8 content-center cursor-pointer sm:hidden' onClick={() => {setIsOpen(true)}}>
              <div className='w-[18px] h-[2px] bg-black my-1'></div>
              <div className='w-[18px] h-[2px] bg-black my-1'></div>
              <div className='w-[18px] h-[2px] bg-black my-1'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}