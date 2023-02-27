import { ICardListTwo } from "@/types/sections";
import { Transition } from "@headlessui/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import CardListTwoItem from "../other/CardListTwoItem";

const CardListTwo = ({ description, list, title }: ICardListTwo) => {
  const { ref, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });
  return (
    <section className="py-6" ref={ref}>
      <Transition
        show={inView}
        as="div"
        enter="transition-opacity duration-[800ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="max-w-full"
      >
        <h2 className="text-2xl text-dark font-bold montserrat pb-2 md:max-w-[75%]">
          {title && title}
        </h2>
        {description && (
          <p className="text-gray whitespace-pre-wrap">
            {description && description}
          </p>
        )}
      </Transition>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 pt-6 gap-6 pr-0 ${
          inView && "card-list"
        }`}
      >
        {list &&
          list.map((item) => <CardListTwoItem key={item._key} data={item} />)}
      </div>
    </section>
  );
};

export default CardListTwo;
