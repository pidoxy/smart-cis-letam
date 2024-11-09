import Sidebar from "@/components/system/Sidebar";
import Header from "./components/Header";
import RequestInfo from "./components/RequestInfo";
import GetRequestOverTime from "./components/GetRequestOverTime";
import GetVolumeByCategory from "./components/GetVolumeByCategory";
import Faq from "./components/Faq";
import LittleInfo from "./components/LittleInfo";

const Root = () => {
  return (
    <main className="flex h-full w-full">
      <Sidebar />
      <div className="w-full bg-[#F6F8FC] h-screen overflow-y-scroll">
        <Header />
        <div className="-mt-14">
          <RequestInfo />
        </div>
        <div className=" mx-10 my-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <GetRequestOverTime />
          <GetVolumeByCategory />
          <Faq />
          <LittleInfo />
        </div>
      </div>
    </main>
  );
};

export default Root;
