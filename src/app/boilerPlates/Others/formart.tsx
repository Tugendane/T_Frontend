"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const Format = () => {
  return (
   <div className='h-[87vh] relative bg-[#F2F1F8]'>
    <div className='bg-[#214B6A] relative w-full flex mb-4 '>  
      <p className='text-white px-6 py-4 text-center'> Choose Formart </p>
    </div>
    <Link href="/Pages/Dashboard/newuser/selectClassification/selectFormart/Mituweli">
    <div className='bg-[#23A576] grid h-[161px] w-[133px] place-content-center items-center  ml-4 rounded-sm'>
    <p className='text-[13px] font-bold'>MITUWELI (RSSB) </p>
    <Image src="/images/mituweliLogo.svg" alt='mituweli Logo' height={70} width={70}></Image>
    </div>
    </Link> 
    <div className='absolute bottom-4 px-5 w-full'>
          <Button className='bg-[#004B84] py-3 px-8 rounded-md text-white'>Back</Button>
        </div>
    </div>
  )
}

export default Format;