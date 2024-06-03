"use client";
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMoneyCheck } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import ChooseMethod from "../../Pages/ChooseMethod/page";
import { Button } from "@nextui-org/react";
function Sidebar() {
    return (
        <div className="flex flex-col p-10 fixed top-0 left-0  h-screen overflow-hidden text-black w-[10%] min-w-[20%] gap-10">
            <div className="text-blue-700 text-">
                <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    height={52.1}
                    width={114}
                />
            </div>
            <div className="flex flex-col gap-20 text-[17px]  font-semibold">
                <div className=" flex flex-col gap-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-3 items-center justify-start  ">
                            <FaCircleExclamation />
                            <Link href={""}>Reports</Link>
                        </div>
                        <div className="flex gap-3  items-center justify-start">
                            <FaBell />
                            <Link href={""}>Notifications</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex gap-3  items-center justify-start">
                            <FaHouseUser />
                            <Link href={""}>Dashboard</Link>
                        </div>
                        <div className="flex gap-3  items-center justify-start">
                            <FaEye />
                            <Link href={""}>View</Link>
                        </div>
                        <div className="flex gap-3  items-center justify-start">
                            <FaMoneyCheck />
                            <Link href={""}>Payment</Link>
                        </div>
                        <div className="flex gap-3  items-center justify-start">
                            <FaCircleInfo />
                            <Link href={""}>Help</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-14">
                    <div className="flex gap-2 items-center justify-center rounded-md bg-blue-900  px-5 py-2">
                        
                        <FaPlus  className="text-white"/>
                        <Link href="/Pages/Dashboard/newuser">
                        <Button className="text-white font-normal">Add new User</Button>
                        </Link>
                    </div>
                    <div className="flex gap-9">
                        <div className="flex gap-6">
                            <div>
                                <Image
                                    src={"/images/profile.png"}
                                    alt="profile"
                                    height={46}
                                    width={46}
                                />
                            </div>
                            <div>
                                <p>John Doe</p>
                                <p>Admin</p>
                            </div>
                        </div>

                        <div className="">
                         <ChooseMethod/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
{
    /* <div className="flex">
    <div className=" flex flex-col">
        <div>Recent users</div>
        <div>
            <table>
                <tr>
                    <td>Names </td>
                    <td>Position</td>
                    <td>Gender</td>
                    <td>Date</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Client</td>
                    <td className="text-yellow-700 ">Female</td>
                    <td>23.01.04</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Employee</td>
                    <td className="text-green-600  ">Male</td>
                    <td>23.01.24</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Client</td>
                    <td className="text-yellow-700 ">Female</td>
                    <td>23.01.04</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Cient</td>
                    <td className="text-green-600  ">Male</td>
                    <td>23.01.24</td>
                </tr>
            </table>
        </div>
    </div>
</div>; */
}
