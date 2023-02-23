"use client";
import { urlForImage } from "@/sanity/lib/image";
import { IHeaderPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import DropDown from "../other/DropDown";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface IProps {
  data: IHeaderPayload;
}

const Header = ({ data: { image, menuItems } }: IProps) => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const width = useWindowWidth();
  const prevWidthRef = useRef(width);

  useEffect(() => {
    if (
      prevWidthRef.current !== null &&
      prevWidthRef.current >= 1024 &&
      width < 1024
    ) {
      setOpen(false);
    }

    prevWidthRef.current = width;
  }, [width]);

  useEffect(() => {
    if (width >= 1024) {
      setOpen(true);
    }
  }, [width]);

  useEffect(() => {
    const handler = (e: any) => {
      // @ts-ignore: Unreachable code error
      if (!menuRef.current.contains(e.target) && width < 1024) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [width]);

  const imageUrl = image && urlForImage(image as any)?.url();
  return (
    <header ref={menuRef} className={`h-[80px] fixed w-full bg-white z-10`}>
      <nav className="flex justify-between items-center xl:container mx-auto h-full px-4 relative">
        <div className={`w-full z-[2] h-full flex items-center lg:w-auto mr-4`}>
          <Link href={"/"}>
            <Image
              src={imageUrl as any}
              width={200}
              height={60}
              alt={image?.alt || ""}
            />
          </Link>
        </div>

        <div
          className={`bg-white absolute top-0 left-0 w-full h-[80px] z-[1] lg:z-[0]`}
        ></div>

        <Transition
          as="ul"
          show={open}
          enter="transition-all duration-300"
          enterFrom="top-[-200%] lg:top-0 opacity-0 lg:opacity-100"
          enterTo="top-[80px] lg:top-0 opacity-100"
          className={`${
            open ? "flex" : "hidden"
          } flex-col lg:flex-row absolute lg:relative lg:top-0 text-left z-[0] lg:z-[2] ${
            width < 1024 && "opacity-0"
          } items-left lg:items-center w-full left-0 lg:w-auto px-4 lg:px-0 bg-white`}
        >
          {menuItems &&
            menuItems.map((item) => (
              <li key={item._id}>
                {item._type === "home" ? (
                  <Link
                    href={"/"}
                    className="montserrat text-dark inline-block group font-medium pb-2 lg:pb-0 lg:ml-4"
                  >
                    {item.title && item.title}
                    <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                  </Link>
                ) : item._type === "page" ? (
                  <Link
                    className="montserrat text-dark inline-block group font-medium lg:ml-4 pb-2 lg:pb-0"
                    href={`/${item.slug}`}
                  >
                    {item.title && item.title}
                    <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                  </Link>
                ) : (
                  <DropDown items={item.linkItems} title={item.title} />
                )}
              </li>
            ))}
        </Transition>

        <button
          className={
            open
              ? "open hamburger z-[3] flex cursor-pointer items-center px-3 py-1 text-xl leading-none text-primary outline-none focus:outline-none lg:hidden"
              : "hamburger z-[3] flex cursor-pointer items-center px-3 py-1 text-xl leading-none text-primary outline-none focus:outline-none lg:hidden"
          }
          type="button"
          onClick={() => setOpen((prevState) => !prevState)}
          aria-label="Hamburger menu"
        >
          <span className="hamburger-top bg-dark"></span>
          <span className="hamburger-middle bg-dark"></span>
          <span className="hamburger-bottom bg-dark"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
