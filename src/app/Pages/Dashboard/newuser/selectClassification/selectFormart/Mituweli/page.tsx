"use client";
import Image from 'next/image';
import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const Mituweli = () => {
  return (
    <div className='w-[80%] min-h-screen float-right h-[100vh] bg-[#F8F8F8]'>
      <div className='bg-[#F2F1F8] p-2 m-2 rounded-sm h-[95vh]'>
        <div className='grid place-content-center'>
          <div className='flex flex-row gap-5 relative h-[80vh] top-7 justify-center'>
            
            <div className='bg-[#23A576] w-[30vw] pt-8 p-2 rounded-sm'>
              <form>
                <div className='flex items-center justify-around mb-4 flex-row'>
                  <div>
                    <p>Numero y'umuryango</p>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2' />
                    <p>Ikiciro cy'ubudehe</p>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2' />
                  </div>
                  <div> 
                    <Image src="/images/profile.svg" alt='profile photo' width={100} height={100} />
                  </div>
                </div>
                <div className='flex flex-col place-content-center space-y-4'>
                  <div className='text-center flex-start flex flex-1 justify-between mx-3'>
                    <label htmlFor="">Intara: </label>
                    <input type="text" className='bg-[#5AD8AB] flex flex-start border-[#85ECC7] w-[300px] border-2 h-[40px] rounded-sm' />
                  </div>
                  <div className='text-center flex flex-1 justify-between mx-3'>
                    <label htmlFor="">Akarere: </label>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[300px] h-[40px] rounded-sm' />
                  </div>
                  <div className='text-center flex flex-1 justify-between mx-3'>
                    <label htmlFor="">Umurenge: </label>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[300px] h-[40px] rounded-sm' />
                  </div>
                  <div className='text-center flex flex-1 justify-between mx-3'>
                    <label htmlFor="">Akagari: </label>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[300px] h-[40px] rounded-sm' />
                  </div>
                  <div className='text-center flex flex-1 justify-between mx-3'>
                    <label htmlFor="">Agashami: </label>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[300px] h-[40px] rounded-sm' />
                  </div>
                  <div className='flex flex-col mx-3'>
                    <label htmlFor="">Izina Ry’Uhagarariye Umuryango </label>
                    <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[300px] h-[40px] rounded-sm' />
                  </div>
                </div>
              </form>
            </div>

            <div className='bg-[#23A576] w-[35vw] rounded-sm'>
              <div className='relative ml-7 mt-4'>
                <p>Nomero y’irangamuntu y’uhagarariye Urugo </p>
                <input type="text" className='bg-[#5AD8AB] border-[#85ECC7] border-2 w-[400px]' />
              </div>
              <div className='flex'>
                <table className='border-collapse w-full m-5'>
                  <thead>
                    <tr className='border-2 p-[8px] border-black'>
                      <th className='border-2 p-[8px] border-black'>Anne</th>
                      <th className='border-2 p-[8px] border-black'>Umusanzu</th>
                      <th className='border-2 p-[8px] border-black'>Agaciro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border-2 p-[8px] border-black'>2024</td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                    </tr>
                    <tr>
                      <td className='border-2 p-[8px] border-black'>2024</td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                    </tr>
                    <tr>
                      <td className='border-2 p-[8px] border-black'>2024</td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                    </tr>
                    <tr>
                      <td className='border-2 p-[8px] border-black'>2024</td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                      <td><input type="text" className='border-2 p-[8px] bg-[#5AD8AB] border-[#85ECC7]' /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className='bg-[#5C8F4A] bottom-0 text-white px-8 py-3 rounded-sm mt-10 ml-24'><Link href="/facial-test">Save</Link></Button>
        </div>
      </div>
    </div>
  );
}

export default Mituweli;
