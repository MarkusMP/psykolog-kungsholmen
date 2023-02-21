import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Montserrat } from "@next/font/google";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        .montserrat {
          font-family: ${montserrat.style.fontFamily} !important;
        }
      `}</style>
      <main className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
