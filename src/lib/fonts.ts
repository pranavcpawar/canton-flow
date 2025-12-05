import { Space_Grotesk, Outfit, Geist, Manrope, Quicksand } from "next/font/google";

const space_grotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geist = Geist({
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export { space_grotesk, outfit, geist, manrope, quicksand };
