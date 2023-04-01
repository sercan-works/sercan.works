import Image from 'next/image'
import bg from '../assets/img/bg.webp'
import avatar from '../assets/img/avatar.jpg'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from 'swiper';
import Link from 'next/link';

const Slider = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-t to-white from-purple-900'>
      <div className='z-50 opacity-90 mt-2 md:mt-10 mx-auto h-48 w-48 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 shadow-lg'>
        <Image src={avatar} layout='responsive' objectFit='cover' />
      </div>

      <div>
        <h1 className='text-center text-2xl font-bold text-gray-800 dark:text-white'>Sercan TAS</h1>
        <p className='text-center text-gray-600 dark:text-gray-400'>Full-Stack Developer</p>
      </div>

      <div className='flex w-20 justify-evenly mx-auto'>
      <Link href='https://www.linkedin.com/in/sercan-tas'>
      <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width={25} height={25} className='cursor-pointer'/>
      </Link>

      <Link href='https://www.github.com/sercan-works'>
      <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width={25} height={25} className='cursor-pointer'/>
      </Link> 
      </div>


{/* HAKKIMDA */}
<div className='mt-5 bg-gray-500 bg-opacity-10 shadow-lg rounded-lg mx-5 md:w-[100vh] md:mx-auto p-5'>
  <h1 className='mt-2 text-start text-2xl italic text-gray-800 dark:text-white'>Hi,</h1>
  <p className='mt-2 text-md text-justify italic'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis magnam aspernatur recusandae, asperiores iusto, repudiandae sint nihil, nemo dolorem ad necessitatibus! Optio quis provident dolor sequi, dicta consectetur magni.
  In laboriosam, praesentium ratione enim corporis nostrum reprehenderit provident quibusdam cum, veniam nemo assumenda quia. Fuga dicta minima beatae ab magni! Hic, suscipit sit! Alias exercitationem voluptatem autem natus eligendi.
  Dolorem ducimus voluptatem incidunt harum obcaecati veritatis saepe laudantium, vitae non atque dolores perferendis, quam possimus totam provident alias, accusamus doloremque id numquam inventore laborum et sapiente. Amet, asperiores ipsum.
 </p>
</div>


{/* #SOFTWARE LOGOS */}
<div>
  <h1 className='mt-16 text-center text-2xl  text-gray-800 dark:text-white'>Software Languages</h1>
</div>
<div className='flex justify-evenly grayscale mt-5 '>



<Image  className='shadow-lg' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width={50} height={50} />


  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width={50} height={50} />

  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width={50} height={50} />
  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width={50} height={50} />


  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width={50} height={50} />
  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width={50} height={50} />
  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width={50} height={50} />
  <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width={50} height={50} />




</div>
    </div>
  )
}

export default Slider