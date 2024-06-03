"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const FolderWitName = () => {
  return (
   <div className='h-[87vh] relative bg-[#F2F1F8]'>
    <div className='bg-[#214B6A] relative w-full flex'>  
      <p className='text-white px-6 py-4 text-center'> Choose Directory </p>
    </div>
   <div className='flex gap-10 p-10'>
   <Link href="/Pages/Dashboard/newuser/selectClassification/selectFormart">
      <div> 
    <Image
      src="/images/folder.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    
    <p className='text-center'>Basic Doc</p>
    </div> 
    </Link>
    <Link href="">
    <div> 
    <Image
      src="/images/folder.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    <p className='text-center'>Bas</p>
    </div> 
    </Link>
    <Link href="">
    <div> 
    <Image
      src="/images/folder.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    <p className='text-center'>Basic Doc</p>
    </div> 
    </Link>

    </div>
    <div className='absolute bottom-4 px-5 w-full'>
          <Button className='bg-[#004B84] py-3 px-8 rounded-md text-white'>Back</Button>
        </div>
    </div>
  )
}

export default FolderWitName;