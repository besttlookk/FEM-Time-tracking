import Image from "next/image";
import React from "react";

const ProfileCard = ({ timeframe, setTimeframe }) => {
  return (
    <div className="rounded-xl bg-card ">
      {/* main content */}
      <div className="flex items-center justify-center text-white p-7 rounded-xl bg-profile laptop:flex-col laptop:items-start laptop:pb-12 laptop:pr-20">
        {/* image holder */}
        <div className="w-16 h-16 overflow-hidden border-2 border-white rounded-full laptop:mb-7 laptop:w-20 laptop:h-20 ">
          <Image
            src="/images/image-jeremy.png"
            alt=""
            className="object-cover"
            width="100%"
            height="100%"
          />
        </div>
        {/* Detail */}
        <div className="ml-3">
          <p className="text-xs text-light-text">Report for</p>
          <h1 className="text-laptop laptop:text-2xl">
            Jeremy <span className="laptop:block">Robson</span>{" "}
          </h1>
        </div>
      </div>

      {/* options */}
      <div className="flex items-center justify-between gap-3 text-sm p-7 flex-between laptop:flex-col laptop:items-start ">
        <button
          className={` hover:text-white transition ${
            timeframe === "daily" ? "font-medium text-white" : "text-light-text"
          }`}
          onClick={() => setTimeframe("daily")}
        >
          Daily
        </button>
        <button
          className={`hover:text-white transition ${
            timeframe === "weekly"
              ? "font-medium text-white"
              : "text-light-text"
          }`}
          onClick={() => setTimeframe("weekly")}
        >
          Weekly
        </button>
        <button
          className={`hover:text-white transition ${
            timeframe === "monthly"
              ? "font-medium text-white"
              : "text-light-text"
          }`}
          onClick={() => setTimeframe("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
