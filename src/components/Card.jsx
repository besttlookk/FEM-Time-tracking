import Image from "next/image";
import React from "react";

const Card = ({ data, timeframe }) => {
  const { title, timeframes, image } = data;

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ backgroundColor: data.color }}
    >
      {/* image container */}
      <div className={`px-4 -mt-2 text-right h-10 `}>
        <Image
          alt="icon"
          src={`/images/${image}`}
          width="60px"
          height="60px"
          // layout="responsive"
          className="border-2 "
        />
      </div>
      {/* content */}
      <div className="relative z-10 p-5 cursor-pointer laptop:absolute laptop:bottom-0 laptop:left-0 laptop:right-0 laptop:top-auto rounded-t-xl bg-card hover:bg-hover laptop:py-6">
        {/* top line = type + 3-dots*/}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white laptop:text-base">
            {title}
          </p>
          <div className="relative">
            <Image
              alt="dot"
              src="/images/icon-ellipsis.svg"
              layout="fill"
              className="text-white fill-white"
            />
          </div>
        </div>
        {/* 2nd line */}
        <div className="flex items-center justify-between mt-1 laptop:flex-col laptop:items-start laptop:mt-3">
          <p className="text-2xl font-light text-white laptop:text-4xl">
            {timeframes[timeframe].current}hrs
          </p>
          <p className="text-xs text-light-text laptop:mt-2">
            {timeframe === "daily"
              ? "Yesterday"
              : timeframe === "weekly"
              ? "Last week"
              : "Last month"}
            - {timeframes[timeframe].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
