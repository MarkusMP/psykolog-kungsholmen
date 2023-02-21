import { urlForImage } from "@/sanity/lib/image";
import { IFooterPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";

interface IProps {
  data: IFooterPayload;
}

const Footer = ({
  data: { copyright, description, image, info, menuItems },
}: IProps) => {
  console.log(menuItems);
  const imageUrl = image && urlForImage(image as any)?.url();
  return (
    <footer className="bg-white w-full">
      <div className="xl:container py-8 mx-auto px-4 flex flex-col mdl:flex-row justify-between w-full">
        <div className="mr-6 pb-6 mdl:pb-0">
          <div className={`flex items-center lg:w-auto`}>
            <Link href={"/"}>
              <Image
                src={imageUrl as any}
                width={250}
                height={40}
                alt={image?.alt || ""}
              />
            </Link>
          </div>
          {description && (
            <p className="max-w-sm text-gray pt-4">{description}</p>
          )}
          <ul className="pt-6">
            {info &&
              info.map((item) => (
                <li key={item._key} className="pb-1 flex items-center">
                  {item.infoList === "email" ? (
                    <MdOutlineEmail className="text-lg text-primary min-w-[18px]" />
                  ) : item.infoList === "location" ? (
                    <MdLocationOn className="text-lg text-primary min-w-[18px]" />
                  ) : item.infoList === "number" ? (
                    <MdPhone className="text-lg text-primary min-w-[18px]" />
                  ) : null}

                  <a className="text-dark ml-1 overflow-anywhere">
                    {item.text && item.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
          {menuItems &&
            menuItems.map((item) => (
              <div key={item._key} className="max-w-fit">
                <h2 className="text-primary font-semibold montserrat">
                  {item.title && item.title}
                </h2>
                <ul className="pt-4">
                  {item.linkItems &&
                    item.linkItems.map((item) => (
                      <li key={item._id}>
                        {item._type === "home" ? (
                          <Link
                            href={"/"}
                            className="text-gray inline-block group pb-2"
                          >
                            {item.title && item.title}
                            <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                          </Link>
                        ) : item._type === "page" ? (
                          <Link
                            className="text-gray inline-block group pb-2"
                            href={`/${item.slug}`}
                          >
                            {item.title && item.title}
                            <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                          </Link>
                        ) : null}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="mx-auto py-6 border-t-[1px] border-primary xl:container px-4">
        <p className="text-center text-dark">
          {copyright && copyright} - Byggt av{" "}
          <a
            href="https://webbtopia.com/sv"
            className="cursor-pointer underline text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webbtopia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
