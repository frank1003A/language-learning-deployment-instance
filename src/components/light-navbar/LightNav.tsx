import { ChevronDown } from "lucide-react";
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
        <div className="mx-auto my-4 flex max-w-3xl flex-row items-center justify-between rounded-full bg-white p-2.5 pl-5 shadow ring-1 ring-primary-20">
          <Logo />

          <div className="flex items-center gap-7">
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

          <div className="flex flex-row gap-4">
            <Link href={"/sign-up"} className="no-underline outline-none">
              <button className="bg-black ring-black rounded-full px-6 py-2.5 font-lilita text-sm font-semibold text-white outline-none ring-1">
                Sign Up
              </button>
            </Link>

            <Link href={"/sign-in"} className="no-underline outline-none">
              <button className="rounded-full bg-white px-6 py-2.5 font-lilita text-sm font-semibold text-black-140 ring-1 ring-gray-200">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LightNav;
