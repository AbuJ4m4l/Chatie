import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import LocalFont from 'next/font/local'
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const moderniz = LocalFont({src:"../public/Fonts/MODERNIZ 900.otf", variable: "--font-moderniz"})