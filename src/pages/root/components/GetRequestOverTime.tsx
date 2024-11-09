import PieChartComponent from "@/components/system/PieChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const GetRequestOverTime = () => {
  const pieChartData = [
    { name: "Payment related Issues", value: 10 },
    { name: "Account statement Enquiries", value: 2 },
    { name: "Reference Letters", value: 1 },
    { name: "Reactivation", value: 1 },
    { name: "Cards(Receivables)", value: 6 },
  ];

  return (
    <div className="bg-white rounded-[10px] px-6 py-5">
      <h2 className="font-semibold text-xl mb-6">Request Volume over Time</h2>
      <Tabs defaultValue="30 days" className="w-full max-w-3xl">
        <TabsList className="w-full border-2 py-1 border-[#E0E2E7] bg-white rounded-[8px] flex flex-wrap justify-center sm:justify-between">
          <TabsTrigger
            value="all date"
            className="flex-grow basis-1/2 sm:basis-auto"
          >
            All Date
          </TabsTrigger>
          <TabsTrigger
            value="12 months"
            className="flex-grow basis-1/2 sm:basis-auto"
          >
            12 Months
          </TabsTrigger>
          <TabsTrigger
            value="30 days"
            className="flex-grow basis-1/2 sm:basis-auto"
          >
            30 Days
          </TabsTrigger>
          <TabsTrigger
            value="7 days"
            className="flex-grow basis-1/2 sm:basis-auto"
          >
            7 Days
          </TabsTrigger>
          <TabsTrigger
            value="24 hours"
            className="flex-grow basis-1/2 sm:basis-auto"
          >
            24 Hours
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all date">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="12 months">Change your password here.</TabsContent>
        <TabsContent value="30 days">
          {/* <PieChartComponent data={pieChartData} /> */}
        </TabsContent>
        <TabsContent value="7 days">Change your password here.</TabsContent>
        <TabsContent value="24 hours">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default GetRequestOverTime;
