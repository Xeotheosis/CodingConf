import React from "react";
import Logo from "./Logo";

const TicketPage = ({ name, selectedImage, username }) => {
  return (
    <section className="w-full flex justify-center p-8">
      <div className="ticket relative p-4 flex flex-col items-start gap-8 w-full  max-w-[22rem]">
        <div className="flex items-start gap-4">
          <Logo />
          <div className="flex flex-col items-start -mt-2">
            <p>Coding Conf</p>
            <p className="opacity-50">31 January / Ax Texas</p>
          </div>
        </div>
        <div className="flex items-end gap-4">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Avatar"
            className="h-14 w-14 rounded-lg"
          />

          <div className="flex flex-col items-start justify-end">
            <h2 className="text-lg font-bold">{name}</h2>
            <p>{username}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketPage;
