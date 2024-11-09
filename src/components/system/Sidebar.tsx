import React from "react";
import Logo from "../../../public/images/logo.png";
import DashboardIcon from "../../../public/svg/dashboard.svg";
import RequestsIcon from "../../../public/svg/requests.svg";
import SupportIcon from "../../../public/svg/support.svg";

import { useLocation } from "react-router-dom";
interface Route {
  icon: any;
  destination: string;
  route: string;
}

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const routes: Route[] = [
    { icon: DashboardIcon, destination: "Dashboard", route: "/" },
    { icon: RequestsIcon, destination: "Requests", route: "requests" },
    { icon: SupportIcon, destination: "Support", route: "support" },
  ];
  return (
    <div className="h-screen w-full max-w-[221px] hidden md:flex flex-col items-center pt-10 px-10">
      <img src={Logo} alt="logo" className="" />
      <ul className="flex flex-col justify-start space-y-5 mt-10">
        {routes.map((route: Route) => (
          <li
            key={route.destination}
            className={`${
              location.pathname == route.route && "bg-[#EF4E31] text-white"
            } w-full py-3 px-[50px] font-bold rounded flex items-center space-x-3`}
          >
            <img src={route.icon} alt="icon" />
            <a href={`/${route.route}`}> {route.destination}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
