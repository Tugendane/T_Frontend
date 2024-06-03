import React from 'react'
import Format from '@/app/boilerPlates/Others/formart'
const SelectFormat = () => {
  return (
    <div className='bg-[#F8F8F8]  text-black p-5 w-[80%] h-screen float-right  gap-5'>
    <div className='flex flex-col w-full gap-2'>
      <div className='h-[67px] bg-white rounded-md'>
        <input type="text" placeholder='   Search by folder Name' className='border-gray-400 border-2  focus:border-gray-400 pl-4 rounded-md w-full h-full'/>
      </div>
      <div className='h-full'>
      <Format/>
      </div>
    </div>
    </div>
  )
}

export default SelectFormat