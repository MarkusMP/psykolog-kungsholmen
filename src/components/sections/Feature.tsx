import { urlForImage } from "@/sanity/lib/image";
import { IFeaturePayload } from "@/types/sections";
import Image from "next/image";
import React from "react";
import CustomPortableText from "../utils/CustomPortableText";

const Feature = ({ description, image, title }: IFeaturePayload) => {
  const imageUrl =
    image &&
    urlForImage(image as any)
      ?.width(610)
      .height(410)
      ?.url();
  return (
    <section className="bg-primary py-12 mt-[-1px]">
      <div className="flex flex-col mdl:flex-row w-full xl:container mx-auto justify-between items-center px-4 ">
        <div className="w-full order-2 mdl:order-1 pt-6 mdl:pt-0 lg:w-1/2 xl:w-6/12 md:pr-2 lg:max-w-[585px]">
          <h2 className="pb-2 text-3xl text-white font-semibold montserrat">
            {title && title}
          </h2>
          {description && (
            <CustomPortableText textContent={description} darkMode={true} />
          )}
        </div>
        <div className="order-1 mdl:order-2 w-full lg:w-1/2 xl:w-6/12 md:pl-2 flex justify-end">
          {imageUrl && (
            <Image
              src={imageUrl as any}
              width={610}
              height={410}
              alt={image?.alt || ""}
              className="rounded-[20px]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
