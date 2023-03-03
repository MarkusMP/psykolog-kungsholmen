import { ItextContentPayload } from "@/types/sections";
import React from "react";
import CustomPortableText from "../utils/CustomPortableText";

const TextContent = ({ content }: ItextContentPayload) => {
  return (
    <section className="min-h-screen max-w-2xl mx-auto py-12">
      <CustomPortableText textContent={content} darkMode={false} />
    </section>
  );
};

export default TextContent;
