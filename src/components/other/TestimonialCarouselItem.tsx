import { urlForImage } from "@/sanity/lib/image";
import { ITestimonialItem } from "@/types/sections";
import Image from "next/image";
import React from "react";
import Rating from "./Rating";

interface IProps {
  index: number;
  data: ITestimonialItem;
}

const TestimonialCarouselItem = ({ data, index }: IProps) => {
  const imageUrl = data.image && urlForImage(data.image as any)?.url();

  return (
    <div
      className={`keen-slider__slide px-3 pb-6 pt-12 number-slide${index + 1}`}
    >
      <div className="bg-white hover:scale-105 transition-transform h-full drop-shadow-lg rounded-[20px] relative px-6 pb-6 pt-2 relative">
        <div
          style={{ transform: "translate(-50%, 0)", left: "50%" }}
          className="absolute mx-auto top-[-40px] flex h-[75px] w-[75px] overflow-hidden rounded-full"
        >
          {imageUrl ? (
            <Image
              src={imageUrl as any}
              fill
              alt={data.image?.alt || ""}
              className="object-cover"
            />
          ) : (
            <Image
              src={`/images/avatar.svg`}
              fill
              alt={"Placeholder avatar"}
              className="object-cover"
            />
          )}
        </div>
        <h3 className="text-center text-dark text-lg font-semibold pb-1 pt-9">
          {data.name && data.name}
        </h3>
        <Rating rating={data.rating as number} />
        <p className="text-gray pt-3 mx-auto">
          {data.description && data.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCarouselItem;
