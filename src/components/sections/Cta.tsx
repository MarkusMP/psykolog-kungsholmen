import { urlForImage } from "@/sanity/lib/image";
import { ICtaPayload } from "@/types/sections";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgPin } from "react-icons/cg";
import { useInView } from "react-intersection-observer";

const Cta = ({
  btnText,
  description,
  link,
  title,
  image,
  location,
}: ICtaPayload) => {
  const { ref, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });
  const imageUrl = image && urlForImage(image as any)?.url();

  return (
    <section className="bg-primary py-12" ref={ref}>
      <div className="flex flex-col mdl:flex-row w-full xl:container mx-auto justify-between items-center px-4 ">
        <Transition
          show={inView}
          as="div"
          enter="transition-opacity duration-[800ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          className="order-2 mdl:order-1 w-full pt-6 mdl:pt-0 lg:w-1/2 xl:w-6/12 md:pr-2 lg:max-w-[585px]"
        >
          <h2 className="pb-2 text-3xl text-white font-semibold montserrat">
            {title && title}
          </h2>
          <p className="text-white pb-6">{description && description}</p>
          {btnText && (
            <Link
              className="montserrat text-center block max-w-fit rounded-full bg-primary_accent hover:bg-secondary px-9 py-[14px] tracking-wider text-white transition-colors"
              href={link?.slug ? `${link.slug}` : "/"}
            >
              {btnText && btnText}
            </Link>
          )}
        </Transition>
        <Transition
          show={inView}
          as="div"
          enter="transition-opacity duration-[800ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          className="order-1 mdl:order-2 w-full lg:w-1/2 xl:w-6/12 md:pl-2"
        >
          {imageUrl && (
            <Image
              src={imageUrl as any}
              width={1000}
              height={1000}
              alt={image?.alt || ""}
              className="rounded-[20px]"
            />
          )}
          {location && (
            <p className="text-white pt-2 flex items-center">
              <CgPin className="mr-2 text-xl min-w-[20px]" /> {location}
            </p>
          )}
        </Transition>
      </div>
    </section>
  );
};

export default Cta;
