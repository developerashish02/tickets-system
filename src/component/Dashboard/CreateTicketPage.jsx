import React from "react";
import CreateTicketForm from "./CreateTicketForm";

const CreateTicketPage = () => {
  return (
    <div className="w-full h-full bg-[#E7E7E7] p-4 mx-auto">
      <div className="w-8/12 mx-auto">
        <CreateTicketForm />
      </div>
    </div>
  );
};

export default CreateTicketPage;
