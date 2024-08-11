"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderSection() {
  const path = usePathname();
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
         <Link href={'/dashboard'}>
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" /></Link>
      <ul className="hidden md:flex gap-6">
        {/* <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/upgrade" && "text-primary font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}
        >
          How it works?
        </li> */}
      </ul>
      <UserButton />
    </div>
  );
}

export default HeaderSection;
