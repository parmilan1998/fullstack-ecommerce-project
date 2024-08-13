import React from "react";
import { LuPhone } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

const ContactDetails = () => {
  return (
    <div className="flex flex-col pb-8 my-8 px-10 shadow rounded">
      <div className="font-poppins">
        <div className="flex items-center gap-3 py-5">
          <div className="rounded-full p-3 text-lg text-white bg-red-600">
            <LuPhone />
          </div>
          <h1 className=" font-bold">Call To Us</h1>
        </div>
        <div className=" space-y-3">
          <p className="text-sm">We are available 24/7, 7 days a week. </p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="font-poppins">
        <div className="flex items-center gap-3 py-5">
          <div className="rounded-full p-3 text-lg text-white bg-red-600">
            <FiMail />
          </div>
          <h1 className=" font-bold">Write To US</h1>
        </div>
        <div className=" space-y-4">
          <p className="text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
