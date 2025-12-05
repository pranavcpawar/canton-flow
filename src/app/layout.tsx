import type { Metadata } from "next";
import "./globals.css";
import { geist, manrope, outfit, quicksand, space_grotesk } from "@/lib/fonts";
import Navbar from "@/app/navbar";
import Note from "@/app/note";

export const metadata: Metadata = {
  title: "Canton Flow",
  description: "Streamlined receivables management powered by Canton Network.",
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
        <Navbar />
        <main className="min-h-screen w-full p-2">{children}</main>
        <Note />
      </body>
    </html>
  );
}
