import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ILinkItemPayload } from "@/types";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

interface IProps {
  title?: string;
  items?: ILinkItemPayload[];
}

const DropDown = ({ items, title }: IProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left lg:ml-4">
      <div>
        <Menu.Button className="inline-block group w-full pb-2 lg:pb-0 justify-center montserrat font-medium text-dark focus:outline-none">
          <span className="flex items-center text-left">
            {title && title} <IoIosArrowDown className="ml-1 text-xl" />
          </span>
          <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-dark transition-all duration-500"></div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-10 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        unmount={false}
        leaveTo="transform opacity-10 scale-95"
      >
        <Menu.Items
          unmount={false}
          className="relative lg:absolute right-0 lg:mt-2 w-64 origin-top-right divide-y divide-primary rounded-md bg-transparent lg:bg-white lg:shadow-lg lg:ring-1 ring-primary ring-opacity-5"
        >
          <div className="lg:p-2">
            {items &&
              items.map((item) => (
                <Menu.Item key={item._id}>
                  <Link
                    href={!item.slug ? "/" : `/${item.slug}`}
                    className={
                      "group w-full mb-[2px] lg:mb-0 pb-2 lg:px-2 lg:py-2 montserrat font-medium text-dark group inline-block text-left"
                    }
                  >
                    {item.title && item.title}
                    <div className="w-0 h-[2px] bg-transparent group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                  </Link>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
