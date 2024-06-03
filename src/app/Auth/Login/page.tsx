"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ReactModal from "react-modal";
import { FaWindows } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Login() {
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        (e.currentTarget.parentNode as Element).classList.add("focus");
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        (e.currentTarget.parentNode as Element).classList.remove("focus");
    };
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleButtonClick = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-row  items-center justify-center w-full ">
            <div className="p-10 flex flex-col bg-white w-[70%] h-screen items-center justify-center relative">
                <div className="w-full">
                    <span className="flex flex-row items-center gap-5">
                        <h1 className="text-3xl font-bold text-blue-900 m-2 ">
                            Tugendane{" "}
                        </h1>
                        <div className="border-l border-solid border-gray-500 h-20"></div>
                        <h1 className="text-gray-500">Login</h1>
                    </span>
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-black-500 ">
                        Welcome back!👋
                    </h1>
                    <h2>Login to get updates about your security stats</h2>
                </div>
                <div className="flex flex-row w-[30%] py-3 px-5 border border-gray-500 rounded-full mt-5">
                    <Image
                        src="/images/googleLogo.svg"
                        alt="Google Logo"
                        width="30"
                        height="30"
                    />
                    <div>Sign in with Google</div>
                </div>

                <div className="flex flex-row items-center justify-center mt-5 font-black">
                    <div className="border-t border-solid border-black w-20"></div>
                    <div>or login with your email</div>
                    <div className="border-t border-solid border-black w-20"></div>
                </div>
                <div className="p-5 flex flex-col w-[40%] gap-6">
                    <div className="py-3 px-5 border border-gray-500 rounded-full relative">
                        <input
                            type="text"
                            placeholder="Organisation Name"
                            className="w-full outline-none border-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="py-3 px-5 border border-gray-500 rounded-full relative">
                        <input
                            type="text"
                            placeholder="Organisation type"
                            className="w-full outline-none border-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="py-3 px-5 border border-gray-500 rounded-full relative">
                        <input
                            type="text"
                            placeholder="Authorised username"
                            className="w-full outline-none border-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="py-3 px-5 border border-gray-500 rounded-full relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none border-none"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-3 items-center ">
                    <div className="flex items-center gap-1">
                        <input type="checkbox" />
                        <div>Remember</div>
                    </div>

                    <a href="">
                        {" "}
                        <div className="font-bold text-blue-700 ">
                            forgot Password?
                        </div>
                    </a>
                </div>
                <div className="flex items-center justify-center rounded-full border bg-blue-500 w-[35%] py-2 text-white mt-4">
                    login
                </div>
                <div className="mt-4">
                    <p>
                        Don&apos;t have an account?
                        <span>
                            <button
                                type="button"
                                className="text-blue-700 underline font-bold"
                                onClick={handleButtonClick}
                            >
                                Request one
                            </button>
                        </span>
                    </p>
                </div>
            </div>
            <div className="absolute  ml-[50%]">
                <Image
                    src="/images/Rectangle 64.png"
                    alt="Image"
                    width="500"
                    height="500"
                />
            </div>

            <div className="bg-dark-blue w-[30%] h-screen text-white flex justify-center py-10 text-3xl ">
                <FaWindows />
            </div>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="lg:w-[600px]  p-10 mt-20 bg-white shadow-lg lg:ml-[500px] "
            >
                <div className="p-4 bg-white rounded-md flex flex-col gap-4">
                    <div className="flex justify-between items-center gap-3">
                        <div>
                            <span> Contact us</span>
                        </div>

                        <div onClick={handleCloseModal}>
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={handleCloseModal}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Fullname"
                            className="bg-transparent  border border-gray-400 rounded-2xl p-2"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="bg-transparent  border border-gray-400 rounded-2xl p-2 "
                        />
                    </div>
                    <div className=" ">
                        <textarea
                            className="w-1600 h-1600 border border-gray-400 rounded-2xl p-2  "
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                            <input type="checkbox" className="bg-dark-blue" />
                            <span>Requesting an account</span>
                        </div>
                        <div>
                            <button className="bg-dark-blue font-bold text-white px-4 py-2 rounded-md flex items-center justify-center ">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default Login;