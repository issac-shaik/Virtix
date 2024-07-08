"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Assets",
    href: "#",
  },
  {
    id: 2,
    name: "Code",
    href: "#",
  },
  {
    id: 3,
    name: "Games",
    href: "#",
  },
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <div className="hidden md:flex justify-around items-center col-span-6 gap-x-2">
      {navbarLinks.map((navItem) => (
        <Link
          className={cn(
            location === navItem.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center px-8 py-2  font-medium rounded-md"
          )}
          href={navItem.href}
          key={navItem.id}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
}
