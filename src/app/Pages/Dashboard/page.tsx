"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Chart from "./charts/chart";
import Image from "next/image";

export default function MyComponent() {
    return (
        <div className="bg-back-default text-black p-5 w-[85%] h-screen float-right flex flex-col gap-5 ">
            <div className=" flex  justify-between items-center  bg-white  rounded-md p-3">
                <div className="flex gap-3 text-gray-500 items-center justify-center text-2xl ">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Search by name of the user"
                        className="text-xl w-[800px] border-none outline-none shadow-none "
                    />
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <div className="text-blue-500 p-4 ">
                        <select className="bg-back-default">
                            <option
                                value="department"
                                className="text-blue-600 "
                            >
                                department
                            </option>
                            <option value="entity">entity</option>
                            <option value="share">share</option>
                        </select>
                    </div>
                    <div>Mon 12 jan ,2024</div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl text-black font-bold">OVERVIEW</h1>
                <div className="grid grid-cols-4 grid-rows-1  gap-5 p-5">
                    <div className="flex l items-center justify-around bg-white  p-10 rounded-md shadow-2xl ">
                        <div>
                            <p className="text-gray-400  ">Total Users</p>
                            <p className="font-bold text-2xl">123</p>
                        </div>
                        <div>
                            <Image
                                src={"/images/Ellipse 59.png"}
                                alt="total"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                    <div className="flex   items-center justify-around bg-white p-4 rounded-md shadow-2xl ">
                        <div>
                            <p className="text-gray-400  ">Pending Payments</p>
                            <p className="font-bold text-2xl">24</p>
                        </div>
                        <div>
                            <Image
                                src={"/images/Ellipse 61.png"}
                                alt="pending"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                    <div className="flex   items-center justify-around  bg-white  p-4 rounded-md shadow-2xl">
                        <div>
                            <p className="text-gray-400  ">Reports</p>
                            <p className="font-bold text-2xl">1832</p>
                        </div>
                        <div>
                            <Image
                                src={"/images/Ellipse 65.png"}
                                alt="reports"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                    <div className="flex  items-center justify-around bg-white  p-4 rounded-md shadow-2xl">
                        <div>
                            <p className="text-gray-400  ">Biometric tests</p>
                            <p className="font-bold text-2xl">5 tests</p>
                        </div>
                        <div>
                            <Image
                                src={"/images/Ellipse 67.png"}
                                alt="tests"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  justify-center items-center gap-10">
                <div className=" flex  flex-col bg-white text-black p-8 ">
                    <div className="font-semibold">Recent users</div>
                    <div className="">
                        <table className="p-5 w-full">
                            <tr className="bg-back-default  p-5">
                                <td className="p-3">Names </td>
                                <td className="p-3">Position</td>
                                <td className="p-3">Gender</td>
                                <td className="p-3">Date</td>
                            </tr>
                            <tr className="bg-slate-200 p-5">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">Client</td>
                                <td className="p-3 text-yellow-700">Female</td>
                                <td className="p-3">23.01.04</td>
                            </tr>
                            <tr className="bg-back-default">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">Employee</td>
                                <td className="p-3 text-green-600">Male</td>
                                <td className="p-3">23.01.24</td>
                            </tr>
                            <tr className="bg-slate-200">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">Client</td>
                                <td className="p-3 text-yellow-700">Female</td>
                                <td className="p-3">23.01.04</td>
                            </tr>
                            <tr className="bg-back-default">
                                <td className="p-3">John Doe</td>
                                <td className="p-3">Client</td>
                                <td className="p-3 text-green-600">Male</td>
                                <td className="p-3">23.01.24</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-8">
                    <div className="">
                        <p className="font-semibold">Analytics</p>
                        <p>Monthly increase rate</p>
                    </div>
                    <Chart />
                </div>
            </div>
        </div>
    );
}