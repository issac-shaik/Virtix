import Link from "next/link";
import Virtix from "@public/Virtix.png";
import Image from "next/image";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-2 my-4">
      <div className="md:col-span-3">
        <Link href="/">
          <Image width="120" height="120" src="/Virtix.png" alt="logo" />
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        <Button>Login</Button>
        <Button variant="secondary">Register</Button>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
