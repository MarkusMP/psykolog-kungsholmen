import { urlForImage } from "@/sanity/lib/image";
import { ICtaPayload } from "@/types/sections";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { CgPin } from "react-icons/cg";
import { useInView } from "react-intersection-observer";
import Map from "../Map";
import CustomPortableText from "../utils/CustomPortableText";

const Cta = ({
  btnText,
  description,
  link,
  title,
  location,
  latitude,
  longitude,
}: ICtaPayload) => {
  const { ref, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });
  const DEFAULT_CENTER = [59.33128017050447, 18.02455795485776];

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
          <div className="pb-6">
            {description && (
              <CustomPortableText textContent={description} darkMode={true} />
            )}
          </div>
          {btnText && (
            <Link
              className="montserrat text-center block max-w-fit rounded-full bg-primary_accent px-9 py-[14px] tracking-wider hover:bg-secondary_accent text-white transition-colors"
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
          <Map
            className="relative outline-none"
            width="800"
            height="480"
            center={
              longitude && latitude ? [longitude, latitude] : DEFAULT_CENTER
            }
            zoom={15}
          >
            {({ TileLayer, Marker, Popup }: any) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={DEFAULT_CENTER}>
                  {location && <Popup>{location}</Popup>}
                </Marker>
              </>
            )}
          </Map>
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
