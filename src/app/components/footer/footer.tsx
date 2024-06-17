'use client'

import React from 'react'
import Image from 'next/image'
import home from './../../assets/image/items/home.png'
import logo from './../../assets/image/Oasis Final Logo.png'
import Email from './../../assets/image/social media icon/Email.png'
import Linkedin from './../../assets/image/social media icon/LinkedIn.png'
import FaceBook from './../../assets/image/social media icon/Facebook.png'
import Instagram from './../../assets/image/social media icon/Instagram.png'
import Youtube from './../../assets/image/social media icon/Youtube.png'
import Twitter from './../../assets/image/social media icon/Twitter.png'
import Phone from './../../assets/image/social media icon/phone.png'
export default function Footer () {
  return(
    <>
      <div className='w-full flex bg-footer-banner py-24'>
        <div className='w-full max-w-[400px] mx-auto text-center'>
          <p className='text-4xl font-ivy-mode font-bold'>FIND YOUR NEW HOME NOBLE LIC </p>
          <button className='text-xl font-bold mt-6 p-4 px-8 uppercase hover:bg-red border-[2px] border-red hover:text-white text-red duration-500'>
            Get in touch
          </button>
        </div>
      </div>
      <div className='w-full bg-main-bg'>
        <div className='w-full max-w-[1440px] mx-auto py-8 px-6'>
          <div className='sm:mt-24'>
            <a><p className='relative w-[280px] mt-3 border-b-[2px] text-gray-600 text-xl link after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0'>Standard Operating Procedures</p> </a>
            <a><p className='relative w-[265px] mt-3 border-b-[2px] text-gray-600 text-xl link after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0'>Reasonable Accommodations</p> </a>
            <a><p className='relative w-[115px] mt-3 border-b-[2px] text-gray-600 text-xl link after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0'>Fair Housing</p> </a>
            <a><p className='relative w-[48px] mt-3 border-b-[2px] text-gray-600 text-xl link after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0'>Legal</p> </a>
          </div>
          <div className='mt-6 sm:mt-12 flex items-center space-x-5'>
            <a className='cursor-pointer'><Image alt='' src={home} width={60}/></a>
            <a className='cursor-pointer'><Image src={Phone} width={40} alt='' /></a>
          </div>

          <div className='mt-6 sm:mt-20 sm:flex w-full'>
            <div className='w-full flex items-center space-x-5'>
              <Image src={logo} alt='' width={80} />
              <a href='' className='after:hover:h-0'>
                <Image src={Email} alt='' width={20}/>
              </a>
              <a href='' className='after:hover:h-0'>
                <Image src={Instagram} alt='' width={20}/>
              </a>
              <a href='' className='after:hover:h-0'>
                <Image src={FaceBook} alt='' width={20}/>
              </a>
              <a href='' className='after:hover:h-0'>
                <Image src={Twitter} alt='' width={20}/>
              </a>
              <a href='' className='after:hover:h-0'>
                <Image src={Youtube} alt='' width={20}/>
              </a>
            </div>
            <div className='w-full flex items-center space-x-5'>
              <p className='text-xl'>
                Copyright 2024 | &nbsp;
                <span>
                  <a>
                    <span className='relative w-[160px] mt-3 border-b-[2px] text-gray-600 text-xl link after:absolute after:bottom-[-2px] after:bg-black after:h-0 after:w-0'>
                   Privacy Policy
                    </span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}