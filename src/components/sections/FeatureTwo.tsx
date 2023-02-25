import { IFeatureTwoPayload } from "@/types/sections";
import Link from "next/link";
import React from "react";

const FeatureTwo = ({
  btnText,
  description,
  link,
  title,
  titleColor,
}: IFeatureTwoPayload) => {
  return (
    <section className="max-w-full md:max-w-[75%] pt-6 pb-6">
      <h2 className="text-2xl text-dark font-bold montserrat">
        {title && title}
        <span className="text-primary"> {titleColor && titleColor}</span>
      </h2>
      <p className="pt-2 pb-4 text-gray">{description && description}</p>
      {btnText && (
        <Link
          className="montserrat text-center block max-w-fit rounded-full bg-primary px-9 py-[14px] tracking-wider text-white transition-colors hover:bg-primary_accent"
          href={link?.slug ? `${link.slug}` : "/"}
        >
          {btnText && btnText}
        </Link>
      )}
    </section>
  );
};

export default FeatureTwo;
