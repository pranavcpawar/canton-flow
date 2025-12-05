import type { Metadata } from "next";
import "./globals.css";
import { geist, manrope, outfit, quicksand, space_grotesk } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Canton Flow",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${outfit.variable} ${manrope.variable} ${quicksand.variable} ${space_grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
