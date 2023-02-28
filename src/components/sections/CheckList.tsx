import { ICheckListPayload } from "@/types/sections";
import { Transition } from "@headlessui/react";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const CheckList = ({ list, title }: ICheckListPayload) => {
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
      >
        <h2 className="text-xl sm:text-2xl text-dark font-bold montserrat max-w-full md:max-w-[75%]">
          {title && title}
        </h2>

        <div className="pt-6 ">
          {list &&
            list.map((item) => (
              <div className="pb-3 flex items-center" key={item._key}>
                <div className="bg-primary max-w-fit rounded-full">
                  <BsCheck className="text-white text-3xl" />
                </div>
                <p className="pl-3 text-gray max-w-full">
                  {item.text && item.text}
                </p>
              </div>
            ))}
        </div>
      </Transition>
    </section>
  );
};

export default CheckList;
