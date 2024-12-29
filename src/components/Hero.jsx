import React from "react";
import Logo from "./Logo";

const Hero = ({ ticket, name, email }) => {
  return (
    <div className="p-8 w-full lines relative flex flex-col items-center gap-8">
      <div className="flex items-center justify-center gap-4">
        <Logo />
        <h1 className="text-2xl">Coding Conf</h1>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          {!ticket ? (
            "Your Journey to Coding Conf 2025 Starts Here!"
          ) : (
            <>
              Congrats, <span className="gradient-text">{name}</span>!
            </>
          )}
        </h2>
      </div>
      <div>
        <h3 className="text-xl opacity-70">
          {!ticket ? (
            "Secure your spot at next year's biggest coding conference."
          ) : (
            <>
              <p>
                We've emailed your ticket to{" "}
                <span className="gradient-text">{email}</span> and we will send
                updates on the run up the event.
              </p>
            </>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Hero;
