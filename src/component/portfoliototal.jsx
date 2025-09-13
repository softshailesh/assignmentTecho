import React from "react";

const Portfoliototal = () => {
  return (
    <div className="w-full h-auto sm:h-[288px] p-[24px] rounded-[12px] bg-[#27272A] flex flex-wrap gap-[24px] sm:gap-0">
      <div className="w-full sm:w-[49%] h-auto sm:h-[240px] flex flex-col justify-between gap-[20px]">
        <span className="font-medium text-lg leading-5 tracking-normal text-[#A1A1AA]">
          Portfolio Total
        </span>
        <div className=" w-full h-full flex flex-col justify-between">
          <p className="font-medium text-[44px] leading-[110%] tracking-[-0.0224em] text-[#F4F4F5]">
            $10,275.08
          </p>
          <span className="font-normal text-xs leading-5 tracking-normal text-[#A1A1AA] mt-[10px]">
            Last updated: 3:42:12 PM
          </span>
        </div>
      </div>
     

      <div className="w-full sm:w-[49%]  h-auto sm:h-[240px] flex flex-col justify-between gap-[20px]">
        <span className="font-medium text-lg leading-5 tracking-normal text-[#A1A1AA]">
          Portfolio Total
        </span>
        <div className=" w-full h-full flex flex-col justify-between">
          <p className="font-medium text-[44px] leading-[110%] tracking-[-0.0224em] text-[#F4F4F5]">
            $10,275.08
          </p>
          <span className="font-normal text-xs leading-5 tracking-normal text-[#A1A1AA] mt-[10px]">
            Last updated: 3:42:12 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfoliototal;
