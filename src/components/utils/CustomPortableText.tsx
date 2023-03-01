import React from "react";
import { PortableText } from "@portabletext/react";

interface IProps {
  textContent: any[];
  darkMode: boolean;
}

const CustomPortableText = ({ darkMode, textContent }: IProps) => {
  const myPortableTextComponents = {
    marks: {
      strong: ({ children }: any) => (
        <span
          className={`font-bold ${
            darkMode === true ? "text-white" : "text-dark"
          }`}
        >
          {children}
        </span>
      ),
      link: ({ children, value }: any) => {
        return (
          <a
            href={value.href}
            rel={"noreferrer noopener"}
            target="_blank"
            className={`underline transition-colors ${
              darkMode === true
                ? "text-yellow hover:text-yellow_accent"
                : "text-secondary hover:text-primary"
            }`}
          >
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }: any) => (
        <ul
          className={`list-disc space-y-3 ${
            darkMode === true ? "ml-5 py-3" : "marker:text-dark"
          }`}
        >
          {children}
        </ul>
      ),
    },
  };
  return (
    <div
      className={`whitespace-pre-wrap ${
        darkMode === true ? "prose-invert text-white" : "prose text-gray"
      }`}
    >
      <PortableText value={textContent} components={myPortableTextComponents} />
    </div>
  );
};

export default CustomPortableText;
