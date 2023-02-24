import { useWindowHeight } from "@/hooks/useWindowHeight";
import { urlForImage } from "@/sanity/lib/image";
import { ISideBarInfoAndContentPayload } from "@/types/sections";
import Image from "next/image";
import React from "react";
import RenderSections from "../pages/RenderSections";

const SideBarInfoAndContent = ({
  contactInfoList,
  contactTitle,
  content,
  description,
  greeting,
  image,
}: ISideBarInfoAndContentPayload) => {
  const height = useWindowHeight();
  const imageUrl = image && urlForImage(image as any)?.url();

  const name =
    contactInfoList && contactInfoList.find((item) => item.infoName === "name");
  const email =
    contactInfoList &&
    contactInfoList.find((item) => item.infoName === "email");
  const location =
    contactInfoList &&
    contactInfoList.find((item) => item.infoName === "location");
  const number =
    contactInfoList &&
    contactInfoList.find((item) => item.infoName === "number");

  return (
    <div className="flex w-full justify-between xl:container mx-auto px-4 row relative">
      <main className="w-full flex-1">
        {content && <RenderSections sections={content} />}
      </main>

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <aside className="max-w-[265px] mt-12 top-0 hidden lg:block pb-6 sticky top-[80px]">
          {imageUrl && (
            <Image
              priority
              src={imageUrl as any}
              width={325}
              height={225}
              className={`rounded-[20px]`}
              alt={image?.alt || ""}
            />
          )}
          <p className="pt-2">
            <span className="text-primary text-xl font-semibold mr-1 montserrat">
              {greeting && greeting}
            </span>
            {description && description}
          </p>
          <h2 className="pt-4 text-primary text-xl font-semibold montserrat">
            {contactTitle && contactTitle}
          </h2>
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex gap-6">
              {name && (
                <div>
                  <h3 className="font-bold text-primary montserrat">Namn:</h3>
                  <p>{name.text}</p>
                </div>
              )}
              {number && (
                <div>
                  <h3 className="font-bold text-primary montserrat">Tel:</h3>
                  <p>{number.text}</p>
                </div>
              )}
            </div>
            {email && (
              <div>
                <h3 className="font-bold text-primary montserrat">E-mail:</h3>
                <p>{email.text}</p>
              </div>
            )}
            {location && (
              <div>
                <h3 className="font-bold text-primary montserrat">Plats:</h3>
                <p>{location.text}</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SideBarInfoAndContent;
