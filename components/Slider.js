import Image from 'next/image'
import bg from '../assets/img/bg.webp'
import avatar from '../assets/img/avatar.jpg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from 'swiper';

const Slider = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-t to-white from-gray-800'>
      <div className='opacity-90 mt-48 mx-auto h-48 w-48 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 shadow-lg'>
        <Image src={avatar} layout='responsive' objectFit='cover' />

      </div>

      <div>
        <h1 className='text-center text-2xl font-bold text-gray-800 dark:text-white'>Sercan TAS</h1>
        <p className='text-center text-gray-600 dark:text-gray-400'>Full-Stack Developer</p>
      </div>

    </div>
  )
}

export default Slider