import { ICardListTwo } from "@/types/sections";
import React from "react";
import CardListTwoItem from "../other/CardListTwoItem";

const CardListTwo = ({ description, list, title }: ICardListTwo) => {
  return (
    <section className="py-6">
      <div className="max-w-full">
        <h2 className="text-2xl text-dark font-bold montserrat pb-2 md:max-w-[75%]">
          {title && title}
        </h2>
        {description && (
          <p className="text-gray whitespace-pre-wrap">
            {description && description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-6 pr-0">
        {list &&
          list.map((item) => <CardListTwoItem key={item._key} data={item} />)}
      </div>
    </section>
  );
};

export default CardListTwo;
