import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PieChartComponent from "@/components/system/PieChart";

const GetVolumeByCategory = () => {
  const pieChartData = [
    { name: "Payment related Issues", value: 10 },
    { name: "Account statement Enquiries", value: 2 },
    { name: "Reference Letters", value: 1 },
    { name: "Reactivation", value: 1 },
    { name: "Cards(Receivables)", value: 6 },
  ];
  return (
    <div className="bg-white rounded-[10px] px-6 py-5">
      <h2 className="font-semibold text-xl mb-6">Request Volume by Category</h2>
      <Tabs defaultValue="30 days" className="w-full max-w-3xl">
        <TabsList className="w-full border-2 py-1 border-[#E0E2E7] bg-white rounded-[8px] flex flex-wrap justify-center sm:justify-between">
          <TabsTrigger value="all date">All Date</TabsTrigger>
          <TabsTrigger value="12 months">12 Months</TabsTrigger>
          <TabsTrigger value="30 days">30 Days</TabsTrigger>
          <TabsTrigger value="7 days">7 Days</TabsTrigger>
          <TabsTrigger value="24 hours">24 Hours</TabsTrigger>
        </TabsList>
        <TabsContent value="all date">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="12 months">Change your password here.</TabsContent>
        <TabsContent value="30 days" className="">
          {/* <PieChartComponent data={pieChartData} /> */}
        </TabsContent>
        <TabsContent value="7 days">Change your password here.</TabsContent>
        <TabsContent value="24 hours">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default GetVolumeByCategory;
