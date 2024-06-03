import React from 'react';
import Account from "@/app/Pages/Dashboard/view/account/page";
import Table from "@/app/Pages/Dashboard/view/Table/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ViewPage = () => {
  return (
    <div className="w-[78%] min-h-screen float-right rounded-3xs bg-[#F8F8F8] overflow-hidden flex flex-col items-start justify-start p-[22px] gap-[26px] leading-normal tracking-normal mq1225:flex-wrap">
      <div className="flex flex-col  bg-white p-5 w-full">
        <p className="text-xl mb-4">Recently added</p>
        <div className='flex gap-20'>
        <div className="flex gap-10 items-start">
          <Account name="Alice Duein" date="12/07/2018" bio="eye, nose, ear" />
          <Account name="John Doe" date="01/01/2021" bio="eye, voice" />
          <Account name="Jane Smith" date="05/23/2019" bio="nose, ear" />
           </div>
          <div className="relative mt-5">
            <FontAwesomeIcon icon={faUserPlus} className='h-20 w-20 text-blue-900' />
            {/* <Image
          className="w-[100px] h-[100px] overflow-hidden"
          alt="profile"
          src="/images/profile2.svg"
          width={100}
          height={100}
        /> */}
         
        </div>
       
        </div>
      </div>

      <div className='bg-white w-full'>
        <h1>All users 344</h1>
        <Table/>
      </div>
    </div>
  );
}

export default ViewPage