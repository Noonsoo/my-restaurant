"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function UserLinks() {
  const { data: session, status } = useSession();

  return (
    <div>
      {session?.user.isAdmin || status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}

export default UserLinks;
