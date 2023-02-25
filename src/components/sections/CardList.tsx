import { ICardListPayload } from "@/types/sections";
import React from "react";
import CardListItem from "../other/CardListItem";

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
          list.map((item) => <CardListItem key={item._key} data={item} />)}
      </div>
    </section>
  );
};

export default CardList;
