import React from "react";

const LittleInfo = () => {
  return (
    <div className="bg-white rounded-[10px] px-6 py-5">
      <h2 className="font-semibold text-xl ">
        What kinds of requests can I log through Smart CIS?
      </h2>
      <p className="my-4">
        Through Smart CIS, you can log requests for various services, including:
      </p>
      <ul className="list-disc ml-4 large-bullet flex flex-col space-y-5">
        <li className="text-[#616161CC] font-medium">
          Payment Related Issues (e.g., failed payments, refunds)
        </li>
        <li className="text-[#616161CC] font-medium">
          Account Statement/Enquiries
        </li>
        <li className="text-[#616161CC] font-medium">
          Reference Letters (e.g., for loan applications)
        </li>
        <li className="text-[#616161CC] font-medium">
          Upgrades (e.g., upgrade your account to premium)
        </li>
        <li className="text-[#616161CC] font-medium">
          Card (Receivables) (e.g., lost or stolen credit card)
        </li>
        <li className="text-[#616161CC] font-medium">
          Updates (e.g., change contact information)
        </li>
      </ul>
    </div>
  );
};

export default LittleInfo;
