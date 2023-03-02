import { INotFoundSectionPayload } from "@/types/sections";
import React from "react";

const NotFoundSection = ({ description, title }: INotFoundSectionPayload) => {
  return (
    <section className="min-h-screen pt-[80px] flex items-center justify-center h-full">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl montserrat pb-6 font-bold text-primary">
          {title && title}
        </h1>
        <p className="pb-6 text-gray max-w-xl text-lg">
          {description && description}
        </p>
      </div>
    </section>
  );
};

export default NotFoundSection;
