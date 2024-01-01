"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "homepage",
    url: "/",
  },
  {
    id: 2,
    title: "menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <div>
      <Image
        src={!isOpen ? "/open.png" : "/close.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      />

      {isOpen && (
        <div className="bg-red-500 text-white absolute left-0 top-24 flex flex-col gap-8 justify-center items-center h-[calc(100vh-6rem)] w-full text-3xl z-10 uppercase">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/orders" onClick={() => setIsOpen(false)}>
                Orders
              </Link>
              <Link href="/" onClick={() => signOut()}>
                LogOut
              </Link>
            </>
          )}
          <Link href="/cart" onClick={() => setIsOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
