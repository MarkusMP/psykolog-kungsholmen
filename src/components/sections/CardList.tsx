import { ICardListPayload } from "@/types/sections";
import React from "react";
import { IoLeafOutline } from "react-icons/io5";

const CardList = ({ list, description, title }: ICardListPayload) => {
  return (
    <section className="py-6">
      <div className="max-w-full md:max-w-[75%]">
        <h2 className="text-2xl text-dark font-bold montserrat pb-2">
          {title && title}
        </h2>
        {description && (
          <p className="text-gray">{description && description}</p>
        )}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 pt-6 pr-0 lg:pr-12 auto-rows-fr">
        {list &&
          list.map((item) => (
            <div
              key={item._key}
              className="bg-primary rounded-[20px] p-7 relative overflow-hidden z-[2]"
            >
              <h3 className="text-white text-lg font-semibold pb-2 z-[2]">
                {item.title && item.title}
              </h3>
              <p className="text-white z-[2]">{item.description}</p>

              <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-15px] absolute right-[-15px] transform rotate-[-0deg] " />
              <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[45px] absolute right-[-35px] transform rotate-[-90deg] " />
              <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[0px] absolute right-[55px] transform rotate-[200deg] " />
              <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-15px] absolute right-[95px] transform rotate-[20deg] " />
              <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-45px] absolute right-[155px] transform rotate-[95deg] " />
            </div>
          ))}
      </div>
    </section>
  );
};

export default CardList;
