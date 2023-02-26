import { ICheckListPayload } from "@/types/sections";
import React from "react";
import { BsCheck } from "react-icons/bs";

const CheckList = ({ list, title }: ICheckListPayload) => {
  return (
    <section className="py-6">
      <h2 className="text-2xl text-dark font-bold montserrat max-w-full md:max-w-[75%]">
        {title && title}
      </h2>
      <div className="pt-6 ">
        {list &&
          list.map((item) => (
            <div key={item._key} className="pb-3 flex items-center">
              <div className="bg-primary max-w-fit rounded-full">
                <BsCheck className="text-white text-3xl" />
              </div>
              <p className="pl-3 text-gray max-w-full">
                {item.text && item.text}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CheckList;
