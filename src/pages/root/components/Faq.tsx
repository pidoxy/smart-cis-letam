import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const Faq = () => {
  return (
    <div className="bg-white rounded-[10px] px-6 py-5">
      <h2 className="font-semibold text-xl ">FAQs</h2>
      <p className="mb-4">
        Here you can find more details about any related questions
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="Log Requests">
          <AccordionTrigger className="text-black font-medium text-base">
            Log Requests
          </AccordionTrigger>
          <AccordionContent className="text-[#616161CC] font-normal text-sm leading-[24px]">
            To log a request, simply click on the "Log a Request" button on the
            dashboard. This will open a modal where you can select the type of
            request, enter the relevant transaction ID, and provide additional
            details. Once you've completed the form, click on the "Log Request"
            button to submit your request.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="How can I track the status of my requests?">
          <AccordionTrigger className="text-black font-medium text-base">
            How can I track the status of my requests?
          </AccordionTrigger>
          <AccordionContent className="text-[#616161CC] font-normal text-sm leading-[24px]">
            You can track the status of your requests by visiting the "View All
            Requests" section on the dashboard. This will display a table
            listing all your requests, their status, and their progress. You can
            easily see which requests are pending, completed, or in progress.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="What if I need assistance with a specific request?">
          <AccordionTrigger className="text-black font-medium text-base">
            What if I need assistance with a specific request?
          </AccordionTrigger>
          <AccordionContent className="text-[#616161CC] font-normal text-sm leading-[24px]">
            If you have any questions or need help with a particular request,
            you can always get in touch with our customer service team by
            clicking on the "Speak with a CIS Agent" section on the dashboard.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
