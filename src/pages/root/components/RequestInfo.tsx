import React from "react";
import totalImg from "../../../../public/images/yellow-re.png";
import openImg from "../../../../public/images/stale-re.png";
import pendingImg from "../../../../public/images/red-re.png";
import completedImg from "../../../../public/images/green-re.png";

const RequestInfo = () => {
  return (
    <div className="bg-white rounded-[10px] mx-10 border border-[#E0E0E099] grid grid-cols-1 gap-y-7 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-7  px-8 py-5">
      <div className="flex flex-col items-center w-full border border-[#E0E0E099] rounded-[10px] py-5">
        <img src={totalImg} alt="total requests" />
        <p className="text-[#4B4B4B] font-medium text-sm mt-[10px] mb-[5px] ">
          Total Requests
        </p>
        <h3 className="text-[#232323] font-bold text-2xl">12</h3>
      </div>
      <div className="flex flex-col items-center w-full border border-[#E0E0E099] rounded-[10px] py-5">
        <img src={openImg} alt="open requests" />
        <p className="text-[#4B4B4B] font-medium text-sm mt-[10px] mb-[5px] ">
          Open Requests
        </p>
        <h3 className="text-[#232323] font-bold text-2xl">10</h3>
      </div>
      <div className="flex flex-col items-center w-full border border-[#E0E0E099] rounded-[10px] py-5">
        <img src={pendingImg} alt="pending requests" />
        <p className="text-[#4B4B4B] font-medium text-sm mt-[10px] mb-[5px] ">
          Pending Requests
        </p>
        <h3 className="text-[#232323] font-bold text-2xl">10</h3>
      </div>
      <div className="flex flex-col items-center w-full border border-[#E0E0E099] rounded-[10px] py-5">
        <img src={completedImg} alt="completed requests" />
        <p className="text-[#4B4B4B] font-medium text-sm mt-[10px] mb-[5px] ">
          Completed Requests
        </p>
        <h3 className="text-[#232323] font-bold text-2xl">10</h3>
      </div>
    </div>
  );
};

export default RequestInfo;
