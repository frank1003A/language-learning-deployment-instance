import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logo from "./logo-component";

interface NavbarLinksProperties {
  title: string;
  linkPath: string;
  isActive: boolean;
}

const navbarLinks: NavbarLinksProperties[] = [
  {
    title: "Home",
    isActive: false,
    linkPath: "/",
  },

  {
    title: "Games",
    isActive: false,
    linkPath: "/games",
  },
];

const LightNav = () => {
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 w-screen">
        <div className="mx-auto my-4 flex max-w-[350px] flex-row items-center rounded-full bg-white p-2.5 pl-5 shadow-md ring-1 ring-gray-200 md:max-w-xl md:justify-between md:shadow md:ring-primary-20 lg:max-w-3xl">
          <Logo />

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navbarLinks.map((links, index) => {
              const { isActive, linkPath, title } = links;

              return (
                <Link
                  key={index}
                  href={linkPath}
                  className={`font-inter text-sm no-underline outline-none duration-300 ease-in hover:text-neutral-120 ${isActive ? "text-neutral-120" : "text-neutral-80"}`}
                >
                  {title}
                </Link>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex flex-row items-center gap-1 font-inter text-sm text-neutral-80 no-underline outline-none duration-300 ease-in`}
              >
                <div>About</div>

                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] rounded-xl border border-blue-200 bg-white shadow-sm">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="ml-auto flex flex-row gap-2 md:ml-0 lg:gap-4">
            <Link href={"/sign-up"} className="no-underline outline-none">
              <button className="rounded-full bg-black px-5 py-2 font-lilita text-sm font-semibold text-white outline-none ring-1 ring-black lg:px-6 lg:py-2.5">
                Sign Up
              </button>
            </Link>

            <Link
              href={"/sign-in"}
              className="hidden no-underline outline-none md:block"
            >
              <button className="text-black-140 rounded-full bg-white px-5 py-2 font-lilita text-sm font-semibold ring-1 ring-gray-200 lg:px-6 lg:py-2.5">
                Sign In
              </button>
            </Link>
          </div>

          <button className="ml-2 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 outline-none ring-1 ring-gray-200 md:ml-0 md:hidden">
            <AlignJustify size={16} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default LightNav;
