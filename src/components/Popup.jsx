import React from "react";

const Popup = () => {
  return (
    <div
      className={`items-center ${
        clicked ? "flex" : "hidden"
      }  gap-3 py-3 rounded-b-lg bg-darkGrayishBlue px-7`}
    >
      <div className="flex items-center">
        <span className="text-[0.65em] font-thin uppercase spacing text-grayishBlue">
          share
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
          <img
            src="./icon-facebook.svg"
            alt="share icon"
            height={15}
            width={15}
          />
        </button>
        <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
          <img
            src="./icon-twitter.svg"
            alt="share icon"
            height={15}
            width={15}
          />
        </button>
        <button className="flex items-center justify-center rounded-full w-[25px] h-[25px]">
          <img
            src="./icon-pinterest.svg"
            alt="share icon"
            height={15}
            width={15}
          />
        </button>
      </div>
      <div className="flex justify-end flex-1">
        <button
          className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-grayishBlue"
          onClick={handleClick}
        >
          <img
            src="./icon-share-active.svg"
            alt="share icon"
            height={12}
            width={12}
          />
        </button>
      </div>
    </div>
  );
};

export default Popup;
