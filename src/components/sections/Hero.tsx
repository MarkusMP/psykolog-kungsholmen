import { useWindowHeight } from "@/hooks/useWindowHeight";
import { urlForImage } from "@/sanity/lib/image";
import { IHeroPayload } from "@/types/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ btnText, description, image, link, title }: IHeroPayload) => {
  const height = useWindowHeight();

  const imageUrl = image && urlForImage(image as any)?.url();

  return (
    <section
      className={`flex relative pt-[80px] overflow-y-hidden ${
        height && height < 860 ? "min-h-[860px] h-full" : "xl:h-screen"
      }`}
      style={{ maxHeight: "1080px !important" }}
    >
      <div className="flex flex-col sm:flex-row w-full xl:container mx-auto">
        <div className="sm:w-1/2 px-4 pt-4 sm:self-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl montserrat pb-6 font-bold text-primary">
            {title && title}
          </h1>
          <p className="pb-6 text-gray max-w-xl whitespace-pre-wrap">
            {description && description}
          </p>
          {btnText && (
            <Link
              className="montserrat text-center block max-w-fit rounded-full bg-primary px-9 py-[14px] tracking-wider text-white transition-colors hover:bg-secondary"
              href={link?.slug ? `${link.slug}` : "/"}
            >
              {btnText && btnText}
            </Link>
          )}
        </div>
        <div className="relative xl:absolute xl:right-0 xl:bottom-0 h-full flex h-full w-full sm:w-1/2 mt-4 lg:mt-16 z-[2] max-h-[750px] bg-primary rounded-tl-[350px] flex justify-center">
          <div className={`z-[2] self-end flex`}>
            {imageUrl && (
              <Image
                priority
                src={imageUrl as any}
                width={1000}
                height={1000}
                className="max-h-[769px] xs:pl-14 sm:pl-0 md:pl-10"
                alt={image?.alt || ""}
              />
            )}
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
