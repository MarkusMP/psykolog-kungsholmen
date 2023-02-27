import React from "react";
import { IoLeafOutline } from "react-icons/io5";
import { ICardItem } from "@/types/sections";

interface IProps {
  data: ICardItem;
}

const CardListItem = ({ data: { description, title } }: IProps) => {
  return (
    <div className="bg-primary rounded-[20px] p-7 relative overflow-hidden z-[2] hover:scale-105 transition-transform">
      <h3 className="text-white text-lg font-semibold pb-2 z-[2]">
        {title && title}
      </h3>
      <p className="text-white z-[2]">{description && description}</p>

      <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-15px] absolute right-[-15px] transform rotate-[-0deg] " />
      <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[45px] absolute right-[-35px] transform rotate-[-90deg] " />
      <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[0px] absolute right-[55px] transform rotate-[200deg] " />
      <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-15px] absolute right-[95px] transform rotate-[20deg] " />
      <IoLeafOutline className="text-primary_accent opacity-20 text-6xl z-[-1] bottom-[-45px] absolute right-[155px] transform rotate-[95deg] " />
    </div>
  );
};

export default CardListItem;
