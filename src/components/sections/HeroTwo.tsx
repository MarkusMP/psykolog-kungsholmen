import { IHeroTwo } from "@/types/sections";
import React from "react";

const HeroTwo = ({ title }: IHeroTwo) => {
  return (
    <section className="pt-[80px] bg-primary flex items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl montserrat py-20 font-bold text-white text-center">
        {title && title}
      </h1>
    </section>
  );
};

export default HeroTwo;
