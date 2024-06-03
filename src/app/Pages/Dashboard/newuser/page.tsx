"use client"
import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import FrameComponent from "./frame-component";
import Image from "next/image";
import Link from "next/link";

const NewUser: React.FC = () => {
  const onVectorIconClick = useCallback(() => {
    // Sync "View" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Sync "New User" to the project
  }, []);

  return (
    <div className="w-[78%] min-h-screen float-right rounded-3xs bg-[#F8F8F8] overflow-hidden flex flex-row items-start justify-start p-[22px] gap-[26px] leading-normal tracking-normal mq1225:flex-wrap">
      <div className="h-[863px] w-[1139px] relative rounded-8xs bg-white hidden max-w-full" />

      <main className="flex-1 flex flex-col items-start justify-start p-3.5 box-border min-w-[742px] max-w-full mq1050:min-w-full">
        <section className="self-stretch flex flex-col items-end justify-start gap-[17px] max-w-full text-left text-[22px] text-black font-inter">
          <FrameComponent />
          <div className="self-stretch rounded-8xs bg-white flex flex-col items-end justify-start p-[27px] gap-[45px] max-w-full z-[1] mq750:gap-[22px] mq750:pr-8 mq1050:pt-5 mq1050:pb-[58px] mq450:pb-[38px] mq1225:pl-[25px] mq1225:pr-16">
            <div className="w-[1139px] h-[863px] relative rounded-8xs bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[899px] flex flex-row items-start justify-start gap-[67px] max-w-full mq1050:flex-wrap mq1050:gap-[33px] mq450:gap-[17px]">
                <div className="w-[245px] flex flex-row items-start justify-between min-w-[245px] gap-[20px] mq1050:flex-1">
                  <div className="w-[178px] flex flex-col items-start justify-start gap-[21px]">
                    <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[2] mq450:text-[18px]">
                      Add new user
                    </a>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] text-xl">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="h-[156px] flex-1 relative">
                            <div className="absolute top-0 left-0 rounded-[50%] bg-gainsboro w-full h-full z-[2]" />
                            <Image
                              className="absolute top-[52px] left-[47px] w-[100px] h-[100px] overflow-hidden z-[3]"
                              alt=""
                              src="/images/profile.svg"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[19px]">
                          <div className="relative inline-block min-w-[124px] z-[2] mq450:text-base">
                            Profile Image
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[13px] box-border min-w-[382px] max-w-full text-xl mq750:min-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[11px] max-w-full">
                    <div className="w-[517px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[21px] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-end pb-[11px]">
                          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[76px] z-[2] mq450:text-base">
                            Names*
                          </a>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] h-[49px] flex-1 font-inter text-base text-darkgray-300 min-w-[273px] max-w-full z-[2]"
                          placeholder="Enter full names"
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#d9d9d9" },
                            "& .MuiInputBase-root": {
                              height: "49px",
                              borderRadius: "7px",
                            },
                            "& .MuiInputBase-input": { color: "#979797" },
                          }}
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start gap-[61px] max-w-full mq750:flex-wrap mq450:gap-[15px]">
                        <div className="w-9 flex flex-col items-start justify-end pb-[11px] box-border">
                          <div className="self-stretch relative z-[2] mq450:text-base">
                            <span>ID</span>
                            <span className="text-red">*</span>
                          </div>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] h-[49px] flex-1 font-inter text-base text-darkgray-300 min-w-[273px] max-w-full z-[2]"
                          placeholder="Enter your email"
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#d9d9d9" },
                            "& .MuiInputBase-root": {
                              height: "49px",
                              borderRadius: "7px",
                            },
                            "& .MuiInputBase-input": { color: "#979797" },
                          }}
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[26px] max-w-full mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-end pb-[11px]">
                        <div className="relative z-[2] mq450:text-base">
                          Phone Number
                        </div>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] h-[49px] flex-1 font-inter text-base text-darkgray-300 min-w-[273px] max-w-full z-[2]"
                        placeholder="Enter phone number"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#d9d9d9" },
                          "& .MuiInputBase-root": {
                            height: "49px",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-input": { color: "#979797" },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[28px] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-end pb-[11px]">
                          <a className="[text-decoration:none] relative text-[inherit] z-[2] mq450:text-base">
                            Hospital Name
                          </a>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] h-[49px] flex-1 font-inter text-base text-darkgray-300 min-w-[273px] max-w-full z-[2]"
                          placeholder="Enter hospital name"
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#d9d9d9" },
                            "& .MuiInputBase-root": {
                              height: "49px",
                              borderRadius: "7px",
                            },
                            "& .MuiInputBase-input": { color: "#979797" },
                          }}
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq750:flex-wrap">
                        <div className="flex flex-col items-start justify-end pb-[11px]">
                          <div className="relative whitespace-pre-wrap z-[2] mq450:text-base">
                            Recipient Home
                          </div>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] h-[49px] flex-1 font-inter text-base text-darkgray-300 min-w-[273px] max-w-full z-[2]"
                          placeholder="Enter recipient home"
                          variant="outlined"
                          sx={{
                            "& fieldset": { borderColor: "#d9d9d9" },
                            "& .MuiInputBase-root": {
                              height: "49px",
                              borderRadius: "7px",
                            },
                            "& .MuiInputBase-input": { color: "#979797" },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[893px] flex flex-col items-start justify-start gap-[9px] max-w-full text-xl">
              <div className="relative z-[2] mq450:text-base">
                Add the files to store
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[24px] max-w-full text-base">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="w-[849px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border max-w-full">
                      <div className="flex-1 rounded-8xs box-border flex flex-col items-center justify-start pt-[47px] pb-[67px] pr-5 pl-[67px] gap-[12px] max-w-full z-[2] border-[2px] border-dashed border-gainsboro mq450:pl-5">
                        <div className="w-[825px] h-[213px] relative rounded-8xs box-border hidden max-w-full border-[2px] border-dashed border-gainsboro" />
                        <div className="w-[214px] flex flex-row items-start justify-start py-0 px-[41px] box-border">
                          <div
                            className="flex flex-row items-end justify-start cursor-pointer z-[3]"
                            onClick={onGroupContainerClick}
                          >
                            <div className="flex flex-col items-start justify-end">
                             <Link href="/Pages/Dashboard/newuser/selectClassification"> <Image
                                className="w-[80px] h-[80px] relative"
                                alt=""
                                src="/images/add.svg"
                                width={80}
                                height={80}
                              />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-[3]">
                          Add Files to Store or digitize
                        </div>
                      </div>
                    </div>
                    <div className="relative text-xl inline-block min-w-[94px] z-[2] mq450:text-base">
                      Lock With
                    </div>
                  </div>
                </div>
                <div className="w-[841px] flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-end pb-[26px] box-border max-w-full">
                    <div className="flex flex-row items-start justify-center gap-[10px] mq450:flex-wrap">
                      <div className="rounded-3xs bg-steelblue flex flex-row items-start justify-start py-[17px] px-[26px] z-[2]">
                        <div className="h-[69px] w-[87px] relative rounded-3xs bg-steelblue hidden" />
                        <Image
                          className="h-[45px] w-[45px] relative overflow-hidden z-[3]"
                          alt=""
                          src="/images/faceRecognition.svg"
                          width={45}
                          height={45}
                        />
                      </div>
                      <div className="shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-row items-start justify-start py-5 px-[29px] z-[2]">
                        <div className="h-[69px] w-[87px] relative shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white hidden" />
                        <Image
                          className="h-[29px] w-[29px] relative z-[3]"
                          alt=""
                          src="/images/eyeRis.svg"
                          width={29}
                          height={29}
                        />
                      </div>
                      <div className="shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-row items-start justify-start py-5 px-[29px] z-[2]">
                        <div className="h-[69px] w-[87px] relative shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white hidden" />
                        <Image
                          className="h-[29px] w-[29px] relative z-[3]"
                          alt=""
                          src="/images/FingerPrint.svg"
                          width={29}
                          height={29}
                        />
                      </div>
                      <div className="shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-row items-start justify-start py-5 px-[29px] z-[2]">
                        <div className="h-[69px] w-[87px] relative shadow-[0px_0px_8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white hidden" />
                        <Image
                          className="h-[29px] w-[29px] relative z-[3]"
                          alt=""
                          src="/images/vascularVein.svg"
                          width={29}
                          height={29}
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="h-[45px] w-[111px] relative bg-[#2E516B] hover:bg-[#2E516B] text-white"
                  >
                    Save
                  </Button>
         
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewUser;
