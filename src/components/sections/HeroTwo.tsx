import { IHeroTwo } from "@/types/sections";
import React from "react";

const HeroTwo = ({ title }: IHeroTwo) => {
  return (
    <section className="pt-[80px] bg-primary flex items-center justify-center px-4">
      <h1 className="text-3xl sm:text-5xl montserrat py-20 font-bold text-white">
        {title && title}
      </h1>
    </section>
  );
};

export default HeroTwo;
