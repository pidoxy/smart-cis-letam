import React from "react";
import Notification from "../../../../public/svg/notifications-outline.svg";
import Search from "../../../../public/svg/search.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full bg-gradient-to-r from-custom-dark to-custom-blue px-10 pt-10 pb-[85px]">
        <div className="flex flex-col space-y-2.5 text-[#F2F2F2]">
          <h3 className="text-3xl font-bold">Dashboard</h3>
          <p className="text-base">Hello Johnson, Welcome to Smart CIS</p>
        </div>
        <div className="flex items-center space-x-14 bg-[#F1F0F0] py-2 px-4 rounded-[30px]">
          <div className="bg-[#F4F7FE] flex py-2 rounded-[30px] px-4 space-x-3">
            <img src={Search} alt="search icon" />
            <input
              className="text-black focus:border-0 focus:outline-0 focus:ring-0 bg-inherit hidden md:block"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative">
              <img src={Notification} alt="bell icon" />
              <div className="bg-[#FF0000] text-white h-3 w-3 rounded-full text-[10px] flex items-center justify-center absolute top-0 -right-1">
                7
              </div>
            </div>
            <div className="text-white flex items-center justify-center bg-[#616161] h-8 w-8 rounded-full text-sm font-bold">
              ZO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
