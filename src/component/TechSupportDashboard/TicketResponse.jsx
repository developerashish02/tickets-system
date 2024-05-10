import React from "react";
import CreateTicketForm from "../Dashboard/CreateTicketForm";
import TicketDetails from "../TicketDetails";

const TicketResponse = () => {
  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      {/* <TicketDetails /> */}
      <div className="w-8/12 mx-auto">
        <CreateTicketForm />
      </div>
    </div>
  );
};

export default TicketResponse;
