"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/merchant", label: "Merchant" },
    { href: "/consumer", label: "Consumer" },
    { href: "/pools", label: "Pools" },
  ];
  return (
    <header className="w-full p-2 flex bg-background/80 backdrop-blur-xl text-foreground sticky top-0 z-50 shadow-md border-b border-[#303030]/40">
      <nav className="flex justify-between items-center w-full p-1">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <h1 className="text-xl font-semibold font-space-grotesk text-primary">
              Canton<span className="text-foreground">Flow</span>
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-2 font-outfit">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-md font-outfit font-medium transition-colors hover:cursor-pointer ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div>Connect Wallet</div>
      </nav>
    </header>
  );
}
