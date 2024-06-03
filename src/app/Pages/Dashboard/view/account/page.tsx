"use client"
import React from 'react';
import Image from 'next/image';


// Define the types for the props
interface ProfileProps {
  name: string;
  bio: string;
  date: string;
}

// Use the props interface in the component
const Account: React.FC<ProfileProps> = ({ name, bio, date }) => {
  return (
    <div className='flex flex-col py-5 px-16  border-2 rounded-2xl  border-b-sky-600'>
      <div className="rounded-[50%] bgz-gainsboro w-full h-full">
        <Image
          className="w-[100px] h-[100px] overflow-hidden"
          alt="profile"
          src="/images/profile2.svg"
          width={100}
          height={100}
        />
      </div>
      <div className='font-bold'>{name}</div>
      <div>
        <p>{bio}</p>
        <p>{date}</p>
      </div>
      <div className='text-blue bg-sky-400 rounded p-1'>
        <button>Details</button>
      </div>
    </div>
  );
};

export default Account;
