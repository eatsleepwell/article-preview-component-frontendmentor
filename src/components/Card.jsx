import React from "react";
import Share from "./Share";

const Card = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-lightGrayishBlue">
      <section className="w-[280px] shadow-lg rounded-lg lg:w-[730px] lg:flex lg:flex-row">
        <div className="w-full h-[200px] lg:w-[35%] lg:rounded-l-lg  overflow-hidden">
          <img
            src="./drawers.jpg"
            alt="drawers"
            className="rounded-t-lg lg:min-h-full lg:rounded-l-lg lg:rounded-t-none lg:object-cover"
          />
        </div>
        <div className="lg:w-[65%] lg:rounded-r-lg lg:relative bg-black">
          <div className="flex flex-col gap-2 pb-4 mb-0 bg-white pt-9 px-7 lg:pt-5 lg:rounded-tr-lg">
            <h2 className="text-sm font-bold text-darkGrayishBlue">
              Shift the overall look and feel by adding these wondeful touches
              to furniture in your home
            </h2>
            <p className="text-[0.71em] leading-5 text-grayishBlue">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <Share />
        </div>
      </section>
    </div>
  );
};

export default Card;
