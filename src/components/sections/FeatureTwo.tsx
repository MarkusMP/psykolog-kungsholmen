import { IFeatureTwoPayload } from "@/types/sections";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const FeatureTwo = ({
  btnText,
  description,
  link,
  title,
  titleColor,
}: IFeatureTwoPayload) => {
  const { ref, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="max-w-full pt-6 pb-6">
      <Transition
        show={inView}
        as="div"
        enter="transition-opacity duration-[800ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <h2 className="text-xl sm:text-2xl text-dark font-bold montserrat">
          {title && title}
          <span className="text-primary"> {titleColor && titleColor}</span>
        </h2>
        <p className="pt-2 text-gray whitespace-pre-wrap">
          {description && description}
        </p>
        {btnText && (
          <Link
            className="montserrat text-center block mt-4 max-w-fit rounded-full bg-primary px-9 py-[14px] tracking-wider text-white transition-colors hover:bg-secondary"
            href={link?.slug ? `${link.slug}` : "/"}
          >
            {btnText && btnText}
          </Link>
        )}
      </Transition>
    </section>
  );
};

export default FeatureTwo;
