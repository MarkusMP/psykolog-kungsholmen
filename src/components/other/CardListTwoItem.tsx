import { urlForImage } from "@/sanity/lib/image";
import { ICardListTwoItem } from "@/types/sections";
import Image from "next/image";
import React from "react";

interface IProps {
  data: ICardListTwoItem;
}

const CardListTwoItem = ({ data: { description, image, title } }: IProps) => {
  const imageUrl = image && urlForImage(image as any)?.url();

  return (
    <div>
      {imageUrl && (
        <div className="bg-primary flex items-center justify-center rounded-full h-[55px] w-[55px] relative">
          <Image
            src={imageUrl as any}
            height={35}
            width={40}
            alt={image?.alt || ""}
            className="p-1 max-h-[40px]"
          />
        </div>
      )}
      <h3 className="font-lg font-semibold pt-3">{title && title}</h3>
      <p className="text-gray whitespace-pre-wrap">
        {description && description}
      </p>
    </div>
  );
};

export default CardListTwoItem;
