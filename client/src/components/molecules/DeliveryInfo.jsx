import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryInfo = () => {
  return (
    <div className="border space-y-5 border-slate-200 rounded font-poppins">
      <div className="flex items-center gap-2 pb-1 pt-4 px-5">
        <div>
          <TbTruckDelivery size={28} />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium">Free Delivery</span>
          <span className="text-xs underline font-medium">
            Enter your postal code for Delivery Availability
          </span>
        </div>
      </div>
      <hr />
      <div className="flex items-center gap-2 pb-4 px-5">
        <div>
          <TbTruckDelivery size={28} />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium">Return Delivery</span>
          <span className="text-xs font-medium">
            Free 30 Days Delivery Returns. Details.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
