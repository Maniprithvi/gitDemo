"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Lalezar } from "next/font/google";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Logout from "./auth/Logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LayoutDashboard, User } from "lucide-react";

interface NavLink {
  title: string;
  url: string;
}

const navLinks = [
  { title: "Contests", url: "/contests" },
  { title: "About", url: "/about" },
  { title: "Organizers", url: "/organizers" },
  { title: "Magazine", url: "/magazines" },
];

export const logo = "Maasta";

const lalezar = Lalezar({ weight: "400", style: "normal", subsets: ["latin"] });

const Navbar = () => {
  const session = useSession();
  console.log(session.data?.user);
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<NavLink | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const handleLinkClick = (link: NavLink) => {
    setSelectedLink(link);
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navListColor =
    pathname === "/" ? (scrolled ? "#FF8C00" : "#FFFFFF") : "#FF8C00";
  const isHomepage = pathname === "/";
  const isAuthRoute = pathname.startsWith("/auth") ? "hidden" : "";
  return (
    <div className={`${isAuthRoute}`}>
      <nav
        className={`${
          isHomepage && !scrolled ? "backdrop-blur-md" : "bg-[#FFFFFF] "
        }  w-full h-max fixed top-0 flex xl:flex lg:flex md:flex sm:flex items-center justify-between py-2 xl:py-5 lg:py-5 md:py-4 sm:py-3 md:justify-around sm:justify-between z-50 transition-colors duration-300`}
      >
        <div className="w-full px-4 xl:px-28 lg:px-20 md:px-[40px] sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 items-center">
              <Link
                href={"/"}
                className={`text-[${navListColor}] ${lalezar.className} font-bold font-Lalezar text-[30px] xl:text-[40px] lg:text-[36px] md:text-[34px] sm:text-[32px]`}
                onClick={() => router.push("/")}
              >
                {logo}
              </Link>
            </div>
            <div className="hidden items-center lg:flex lg:gap-6 md:flex md:gap-1 sm:flex sm:gap-0">
              {navLinks.map((link) => (
                <Link href={link.url} key={link.title}>
                  <span
                    className={`group w-max md:w-[90px] sm:w-[90px] flex flex-col justify-center items-center gap-2 px-5 mt-6 xl:text-lg lg:text-lg md:text-[16px] md:px-3 sm:gap-1 sm:text-[14px] sm:px-0 sm:text-right text-center font-bold ${
                      pathname === link.url
                        ? "text-[#FF8C00] text-xl transform -translate-y-2" // Selected link styles on navigated pages
                        : isHomepage && !scrolled
                        ? "text-[white] hover:text-[#FFFFFF] hover:text-xl hover:text-ultraBold hover:transform hover:-translate-y-2" // Homepage non-selected link styles
                        : "text-[#FF8C00] hover:text-xl hover:transform hover:-translate-y-2" // Other pages non-selected link styles
                    }`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.title}
                    <span
                      className={`mt-2 bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 transition-all duration-900 ${
                        pathname === link.url
                          ? "bg-[#FF8C00] rounded-full opacity-1 h-1.2" // Selected link dot styles
                          : isHomepage && !scrolled
                          ? "opacity-0 group-hover:opacity-100 group-hover:bg-[#FFFFFF] group-hover:rounded-full group-hover:h-1.2 group-hover:-translate-y-2" // Homepage non-selected link dot styles
                          : "opacity-0 group-hover:opacity-100 group-hover:bg-[#FF8C00] group-hover:rounded-full group-hover:h-1.2 group-hover:-translate-y-2" // Other pages non-selected link dot styles
                      }`}
                    ></span>
                  </span>
                </Link>
              ))}
              <div className="flex items-center">
                {!session?.data?.user ? (
                  <Link
                    href={"/auth/sign-in"}
                    className={`${
                      isHomepage && !scrolled
                        ? "bg-[#FFFFFF] text-[#FF8C00]"
                        : "bg-gradient-to-tr from-orange-600 to-orange-400 text-[#FFFFFF]"
                    } text-sm xl:text-lg lg-text-lg font-bold py-2 px-4 xl:px-6 xl:py-3 lg:px-6 lg:py-3 md:px-5 md:py-3 sm:px-4 sm:py-2 rounded-[20px] md:ml-4 sm:ml-2`}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`h-8 w-8 p-0 text-[${navListColor}] hover:text-orange-500`}
                        >
                          <User
                            className={`h-6 w-6 text-[${navListColor}]`}
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(`/${session?.data.user?.id}/`)
                          }
                          className=""
                        >
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          DashBoard
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Logout />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                )}
              </div>
            </div>
            <div className="lg:hidden md:hidden sm:hidden flex items-center gap-4">
              <div>
                {!session?.data?.user ? (
                  <Link
                    href={"/auth/sign-in"}
                    className={`${
                      isHomepage && !scrolled
                        ? "bg-[#FFFFFF] text-[#FF8C00]"
                        : "bg-gradient-to-tr from-orange-600 to-orange-400 text-[#FFFFFF]"
                    } text-sm xl:text-lg lg-text-lg font-bold py-2 px-4 xl:px-6 xl:py-3 lg:px-6 lg:py-3 md:px-5 md:py-3 sm:px-4 sm:py-2 rounded-[20px] md:ml-4 sm:ml-2`}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center gap-x-2 text-sm">
                      {session?.data?.user?.name}
                      {session?.data?.user?.image && (
                        <Image
                          className="rounded-full"
                          width={30}
                          height={30}
                          alt="User Avatar"
                          src={""}
                        />
                      )}
                    </div>
                    <Logout />
                  </>
                )}
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <svg
                  className={`${
                    isOpen ? "hidden" : "block"
                  } h-8 w-8 items-center bg-[#FFFFFF] rounded-md p-1`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D474B4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${
                    isOpen ? "block" : "hidden"
                  } h-8 w-8 items-center bg-[#FFFFFF] rounded-md p-1`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D474B4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden md:hidden sm:hidden`}
        >
          <div className="absolute top-[75px] left-[0px] w-full flex flex-col mt-auto px-2 pt-2 pb-3 space-y-4 sm:px-3 bg-[#FFFFFF]">
            {navLinks.map((link) => (
              <Link
                onClick={() => handleLinkClick(link)}
                key={link.url}
                href={link.url}
                className="text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
