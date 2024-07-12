"use client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import useCartStore from "../../cartStore";
import Link from "next/link";

function Header() {
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" width={50} height={50} />
            <h1 className="ml-2 text-2xl lg:text-3xl font-bold">Mia's Store</h1>
          </div>
        </Link>
        <div className="flex items-center relative">
          <Link href="/cart">
            <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300 align-middle" />
          </Link>
          {totalItems > 0 && (
            <div className="ml-2 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-semibold">
              {totalItems}
            </div>
          )}

          <Link className="ml-4" href="/order">
            <MdLocalShipping className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300 align-middle" />
          </Link>

          <a href="https://april-music-app-blog-vxmk-i1xg381ws-monwell57s-projects.vercel.app/">
            <FaHome className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300 ml-3 align-middle" />
          </a>

          <div className="ml-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
