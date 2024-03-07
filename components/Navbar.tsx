"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu.tsx";
// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link.js";
import { cn } from "@/utils/cn";
function Navbar ({ className }: { className?: string }) {
  // const navItems = [
  //   {
  //     name: "Home",
  //     link: "/",
  //     icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //     icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //     icon: (
  //       <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  //     ),
  //   },
  // ];
  const [active, setActive] = useState<string | null>(null);
  return (
    // <FloatingNav navItems={navItems} />
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
      <Menu setActive={setActive} >
        <Link href={"/"} >
          <MenuItem setActive={setActive} active={active} item="Home" ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses" >
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/courses" >All courses</HoveredLink>
            <HoveredLink href="/courses" >Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses" >Advanced Composition</HoveredLink>
            <HoveredLink href="/courses" >Song Writing</HoveredLink>
            <HoveredLink href="/courses" >Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"} >
          <MenuItem setActive={setActive} active={active} item="Contact Us" ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}


export default Navbar
