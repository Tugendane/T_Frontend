"use client";
import Card from "./boilerPlates/LandingPage/Card";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Cardion from "./boilerPlates/LandingPage/Cardion";
import { Icons } from "./boilerPlates/LandingPage/Icons";
import Testimonials from "./boilerPlates/LandingPage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" bg-no-repeat h-[915px]  overflow-x-hidden w-full">
        
        <div className="flex relative  w-full items-center justify-between px-[98px] py-[10px] ">
          <Image width="100" height="100"
            src="/LandingPagePic/ellipse3.svg"
            alt=""
            className="absolute  w-[362px] h-[305px] top-[-60px] right-[-100px] z-[-20]"
          />
          <Image width="100" height="100" src="/LandingPagePic/logo-home.svg" className="h-[45px] w-[53px]" alt="" />
          <div className="flex gap-[40px] w-fit">
            <div className="flex link-container flex-col items-start">
              <a href="" className="text-white">
                Overview
              </a>
              <div className="line w-[0px]"></div>
            </div>
            <div className="flex link-container flex-col items-start">
              <a href="" className="text-white">
                About us
              </a>
              <div className="line w-[0px]"></div>
            </div>
            <div className="flex link-container flex-col items-start">
              <a href="" className="text-white">
                Services
              </a>
              <div className="line w-[0px]"></div>
            </div>
            <div className="flex link-container flex-col items-start">
              <a href="" className="text-white">
                Contacts
              </a>
              <div className="line w-[0px]"></div>
            </div>
          </div>
          <div className="">
          <Link href="/components/Login">  <div className="flex cursor-pointer hover:scale-110 items-center transition-all duration-300 group absolute ml-[-3rem]">
              <Icons.login className="text-white/80 group-hover:text-deep-blue" />
              <p className="invisible group-hover:visible text-deep-blue">
                Login
              </p>
            </div>
            </Link>
          </div>
        </div>
        <div className="relative flex top-0 bg-zinc-700 ">
          <Image width="50" height="50"
            src="/from/redStar.svg"
            className="absolute top-28 left-12 "
            alt=""
          />
          <Image width="50" height="50"
            src="/from/greenCube.svg"
            alt=""
            className="absolute right-[60rem] top-44"
          />
          <Image width="70" height="70"
            src="/from/bitBigRedStar.svg"
            alt=""
            className="absolute top-[10rem] left-[50rem]"
          />
          <Image width="70" height="70"  
            src="/from/illustration.svg"
            className="absolute left-[40rem] top-56 w-[35rem]"
            alt=""
          />
        </div>
        <div className="flex  items-center justify-between relative top-[-0.5rem]">
          <div className="text-white  pl-[98px]  font-semibold">
            <p className="text-[45px] py-[44px]">Tugendane</p>
            <p className=" text-[26px] pb-[40px]">
              Revolutionizing Integrated
              <br />
              Citizen Health Credential Management
            </p>
            <p className="pb-[80px] text-[18px] font-medium ">
              Using biometric technologies to get the users credentials.
            </p>
            <button className="py-[10px] px-[44px] w-fit bg-[#4DACEE] ease-in-out duration-300 rounded-full font-[500] text-[20px] hover:bg-white hover:text-[#4DACEE]">
              Request demo
            </button>
          </div>
          <div className="relative flex items-center justify-center h-[650px]">
            <Image width="70" height="70"
              src="/LandingPagePic/Rectangle.png"
              alt="Computer"
              className=" w-[500px] mr-[-60px]"
            />
            <Image width="100" height="100"
              src="/LandingPagePic/ellipse1.svg"
              alt=""
              className="w-[362px] absolute top-[10rem] left-[-80px] z-[-20]"
            />
            <Image width="100" height="100"
              src="/LandingPagePic/ellipse2.svg"
              alt=""
              className="bottom-[60px] absolute z-[-20] right-[35px] w-[180px]"
            />
          </div>
        </div>
        <div className="relative">
          <Image width="70" height="70" src="/from/cross.svg" className="absolute left-32" alt="" />
          <Image width="100" height="100"
            src="/from/obliqueLines.svg"
            className="absolute left-[30rem]"
            alt=""
          />
          <Image width="80" height="80"
            src="/from/redStar.svg"
            className="absolute left-[75rem] top-[-4rem]"
            alt=""
          />
        </div>
        <Image width="100" height="100"
          src="/LandingPagePic/hero.svg"
          className="w-full h-[915px]  absolute top-0 left-0 z-[-30] object-cover "
          alt=""
        />
      </div>

      {/* <div className="relative bg-green-300">
        <Image width="100" height="100"
          src="/LandingPagePic/ellipse1.svg"
          alt=""
          className="absolute top-3 left-0 w-[20px]"
        />
      </div> */}
      <div className="py-[30px] bg-white"></div>
      <div className="flex flex-col py-[10px] items-center justify-center">
        <button className="bg-gray-400 px-[54px] py-[13px] rounded-full font-semibold text-[18px] hover:bg-white hover:border-gray-400 hover:border-1 hover:text-gray-700 ease-in-out duration-400">
          Our Services
        </button>
        <p className="font-semibold pt-[54px] text-center max-w-[680px] text-[30px]">
          With Biometrics keep your credential management :{" "}
          <span className="text-[#0F6D00]">
            unity,security, and sustainable
          </span>
        </p>
        <p className="py-[18px] text-[#797979] pb-[55px]">
          Stay Authenticated Free From Cyber Threats
        </p>
        <div className="flex items-center gap-[20px] justify-center pb-[110px]">
          <Card
            icon="/LandingPagePic/icon1.svg"
            profile="/LandingPagePic/person.png"
            title="Multi-Biometric Auth"
            background="#BFED8D"
            rotation="rotate-left"
            description="Implements cutting-edge biometric features such as fingerprint, facial recognition, and vascular veins for secure and accurate identity verification."
          ></Card>
          <Card
            icon="/LandingPagePic/icon2.svg"
            profile="/LandingPagePic/eagle.png"
            title="Reliable Information Feeding"
            background="white"
            rotation="center"
            description="Utilize powerful centralised servers to ensure the integrity and security of citizen healthyrecords, reducing the risk of data tampering and Loss."
          ></Card>
          <Card
            icon="/LandingPagePic/icon3.svg"
            profile="/LandingPagePic/morales.svg"
            title="Realtime System"
            background="#8CCCC3"
            rotation="rotate-right"
            description="Enable real-time updates for any changes or modifications to citizen information, ensuring the accuracy and timeliness of digital identities."
          ></Card>
        </div>
        <div className="w-full items-center bg-[#EFEFEF] h-[700px] pl-[184px]  justify-between flex flex-row">
          <div className="">
            <button className=" py-[13px] px-[51px] rounded-full text-[24px] bg-[#929292] hover:border-gray-500 hover:border-2 hover:bg-white hover:text-gray-900 duration-300">
              About Us
            </button>
            <p className="text-[#797979] text-[20px] pt-[20px] ">
              Get to know Us
            </p>
            <p className="font-bold text-[#0F6D00]  text-[36px] max-w-[419px] pt-[34px]">
              We take your trust matters seriously
            </p>
            <div className="flex gap-2 pt-[82px]">
              {[
                {
                  title: "456k",
                  description: "Growup users from all parts of the country",
                },
                {
                  title: "345m",
                  description: "First quarter revenue in 2023",
                },
                {
                  title: "123%",
                  description: "Investment growth in 2023",
                },
              ].map((i,index) => (
                <div key={index}>
                  <p className="font-medium text-[32px]">{i.title}</p>
                  <p className="max-w-[149px] text-[#2B2B2B]">
                    {i.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative  ">
            <div className="w-[500px]  h-[650px] mr-[200px]">
              <Image width="100" height="100"
                src="/LandingPagePic/pic3.png"
                className=" absolute w-[210px] h-[213px] left-[16px] top-[60px]  "
                alt=""
              />
              <Image width="300" height="300"
                src="/LandingPagePic/pic2.png"
                className="absolute right-[152px] top-[216px]"
                alt=""
              />
              <Image width="200" height="200" src="/LandingPagePic/pic1.png" alt="" className="absolute bottom-0" />
            </div>
          </div>
        </div>

        <div className="mt-[88px] justify-between flex flex-row  rounded-lg h-[307px] w-[1368px] bg-gradient-to-b from-[#A0D06C] to-[#18AC97]">
          <div className="text-center max-w-[474px] flex flex-col place-content-center ">
            <div className="relative top-[-15px] left-[66px]">
              <p className="text-[29px] text-start ">
                Open you account today and experience the next secure storage
              </p>
            </div>
            <div className="relative">
              <button className="bg-[#1E1E1E] text-white text-[20px] px-[26px] h-[53px] rounded-full w-[220px] hover:text-black hover:bg-white hover:border-2 hover:border-black duration-300 ">
                Try Tugendane
              </button>
            </div>
            <div className="relative left-[560px] top-[20px] ">
              <Image width="200" height="200" src="/LandingPagePic/midd.svg" className=" " alt="photo" />
            </div>
          </div>
          <div className="relative flex">
            <div className="top-[40px] w-fit left-12 relative">
              <Image width="50" height="50" src="/LandingPagePic/star.svg" alt="photo" className="flex relative right-20 pl-[-100px]"/>
            </div>
            <Image width="300" height="300" alt="photo" src="/LandingPagePic/pic1.png" className="rotate-[20deg]"  />
            <div className="flex relative justify-end  top-[120px]">
              <Image width="50" height="50" src="/LandingPagePic/star.svg" alt="photo"/>
            </div>
          </div>
        </div>
        <div className="bg-[#E0EAF2] w-full h-[626px] mt-[206px] relative flex flex-row  place-content-around ">
          <div className="max-w-[244px] relative top-[242px]">
            <p className="text-[32px] font-medium">
              Got Questions ?We&apos;ve Got Answers!
            </p>
          </div>
          <div className="relative flex flex-col gap-3 top-[107px]">
            
            {/* <Cardion
              Title="How can I manage my biometrics"
              Content="Once you change your biometrics you can easily use them unless u want to change them again where you are given an index to use"
            />  
            <Cardion
              Title="What biometrics do you accept ?"
              Content=" lorem "
            />
            <Cardion
              Title="Do you offer international shipping ?"
              Content="Lorem"
            />
            <Cardion Title="What is your return policy ?" Content="Lorem" />
            <Cardion Title="Are you products cruelty-free ?" Content="Lorem" /> */}
          </div>
        </div>
      </div>
      
      <div className="w-full   place-content-around ">
        
        <Image width="100" height="100" src="/LandingPagePic/bM.svg" alt="" className=" w-full  absolute object-cover" />
        <div className="flex flex-row items-center justify-around ">
          <div className="relative pt-[82px]">
            <p className="text-[32px] w-max-[242px] font-semibold text-[#0F6D00]">
              You are in good community
            </p>
            <div className="flex relative">
              <p className="text-[17px] font-semibold  text-[#2C2C2C] max-w-[438px] pt-[47px] pb-[32px]">
                At Tugendane, we prioritize both the safety of our clients and
                the integrity of our community.Our commitment to security is
                embedded in every facet of our platform, ensuring that your
                peace of mind is paramount. Join our community knowing that your
                safety and privacy are our top priorities. With Tugendane,
                you&apos;re not just a client; you&apos;re part of a secure and supportive
                environment tailored to your needs
              </p>
            </div>
            <button className="bg-[#1E1E1E] relative text-white rounded-full h-[53px] w-[220px]">
              Join Community
            </button>
          </div>
          {/* testimonials*/}
          {/* <div className="bg-green-900 relative w-[633px] h-[367px] pt-[82px]"></div> */}
          <Testimonials />
        </div>

        <div className="flex  justify-center relative">
          <div className="place-content-center  flex flex-col mt-24 ">
            <div className="mb-6">
              <p className="text-[20px] text-[#0F6D00] -mt-5">
                Newsletter - Be the first one to know about our services, offers
                and evelnts
              </p>
            </div>
            <form action="#">
              <input
                type="text"
                placeholder="Company’s you email"
                className="w-[375px] mr-[23px] ml-7 h-[53px] rounded-full border-[#8E8E8E] border-2"
              />
              <input
                type="button"
                value="Subscribe Now"
                className="bg-[#1E1E1E] text-white w-[220px] h-[53px] rounded-full "
              />
            </form>
          </div>
        </div>
      </div>

      <div className="relative ">
        
        <Image width="100" height="100" src="/LandingPagePic/bottom.png" className=" w-full absolute z-[-40]" alt="" />
        
        <div className="relative flex flex-col pt-48">
          <div className="absolute pl-24 ">
            <Image width="100" height="100" src="/LandingPagePic/logo-home.svg" className="z-[0] mb-24 pl-20 mt-[-5rem]" alt="" />
          </div>
          <div className="text-white relative justify-between flex w-full px-16 pt-10">
                <div>
            <p className="text-30px font-semibold text-white text-[20px]">
              Contact information
            </p>
            <div id="contacts" className="flex flex-col gap-2">
              <div id="contacts_ico" className="flex flex-row gap-5 mt-3">
                <IoLogoInstagram size={25} className="text-white" />
                <AiOutlineWhatsApp size={25} className="text-white" />
                <FaTwitter size={25} className="text-white" />
                <BsTelephone size={25} className="text-white" />
              </div>
              <div className="flex flex-row">
                <CiMail size={25} className="text-white" />
                <p className="text-white pl-4 text-[14px]">tugendane@gmail.com</p>
              </div>
              <div className="flex flex-row">
                <BsTelephone size={25} className="text-white" />
                <p className="text-white pl-4 text-[14px]">0045 26 71 99 53</p>
              </div>
            </div>
                </div>
                <div>
                  <p className="font-semibold text-[20px]">My Account</p>
                  <p className="text-[14px]">Signin</p>
                  <p className="text-[14px]">Login</p>
                </div>
                <div>
                  <p className="font-semibold text-[20px]">Information</p>
                  <p className="text-[14px]">Blog</p>
                  <p className="text-[14px]">FAQ</p>
                  <p>Contact Us</p>
                </div>
                <div>
                  <p className="font-semibold text-[20px]">Payment  Methods</p>
                  <p className="text-[14px]">Our Terms</p>
                  <p className="text-[14px]">Payment methods</p>
                </div>
          </div>
          <div className="pl-14 pt-20">
            <Image width="100" height="100" src="/LandingPagePic/Line.svg" alt="" />
          </div>
          <div>
            <p className="text-[16px] text-[#606060]  justify-center pt-10 pl-[40em]">Privacy Policy  |  Terms & Conditions</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

