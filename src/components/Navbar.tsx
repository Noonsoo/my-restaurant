import MenuPage from "@/app/menu/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import UserLinks from "./UserLinks";
import { useSession } from "next-auth/react";

function Navbar() {
  return (
    <div className="h-12  text-red-500 flex items-center justify-between border-b-2 border-b-red-500 uppercase p-4  md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="md:font-bold md:text-center flex-1">
        <Link href="/">Massimo</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center  min-w-fit gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+123 456 7</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
