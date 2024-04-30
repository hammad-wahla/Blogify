"use client";
import Link from "next/link";
import React, { useState } from "react";
import { handleLogout } from "../../../lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  // const [open, setOpen] = useState(false);
  const session = false;
  const isAdmin = false;
  return (
    <div className="flex space-x-6 ">
      {links.map((link) => (
        <div
          className=" hover:bg-slate-900 rounded px-2 py-1 font-bold  "
          key={link.path}
        >
          <Link href={link.path}>{link.title}</Link>
        </div>
      ))}
      {session ? (
        <>
          {isAdmin && (
            <div className="bg-blue-950 hover:bg-gray-950 text-white font-bold px-2 pt-[2px] ml-5 border border-purple-500 rounded">
              {" "}
              <Link href="./admin">Admin</Link>
            </div>
          )}
          <form action={handleLogout}>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-2 ml-5 border border-grey-700 rounded">
              Logout
            </button>
          </form>
        </>
      ) : (
        <div className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-2 pt-[2px] ml-5 border border-grey-700 rounded">
          <Link href="./login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Links;
