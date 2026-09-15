import localFont from "next/font/local";
import { Barlow, IBM_Plex_Mono } from "next/font/google";

export const cramps = localFont({
  src: "../../public/brand/cramps-regular.ttf",
  variable: "--font-cramps",
  display: "swap",
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
