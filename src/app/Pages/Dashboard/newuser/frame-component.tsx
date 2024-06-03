
import type { NextPage } from "next";
import { TextField } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-white flex flex-row items-start justify-between pt-[15px] pb-[11px] pr-[46px] pl-[35px] box-border max-w-full gap-[20px] text-left text-mini text-mediumslateblue font-inter mq750:flex-wrap mq1225:pr-[23px] mq1225:box-border ${className}`}
    >
      <div className="h-[67px] w-[1141px] relative rounded-3xs bg-white hidden max-w-full" />
      <div className="w-[254px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
          <TextField
            className="[border:none] bg-[transparent] h-6 flex-1 font-inter text-base text-darkgray-200"
            placeholder="Search by name of the user"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "24px",
                borderRadius: "0px 0px 0px 0px",
              },
              "& .MuiInputBase-input": { color: "#9e9e9e" },
            }}
          />
        </div>
      </div>
      <div className="w-[313px] flex flex-row items-start justify-start gap-[19px]">
        <div className="flex-1 rounded-8xs bg-whitesmoke-200 flex flex-row items-start justify-between pt-[11px] pb-2.5 pr-[23px] pl-[19px] gap-[20px] z-[1]">
          <div className="h-[41px] w-[162px] relative rounded-8xs bg-whitesmoke-200 hidden" />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px] z-[2]">
              Filter by
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 text-base text-black">
          <a className="[text-decoration:none] relative font-medium text-[inherit] z-[1]">
            Mon 12 Jan, 2024
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
