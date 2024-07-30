"use client";

import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LightNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in
    const userSignedIn = false;
    setIsSignedIn(userSignedIn);
  }, []);

  return (
    <nav className="h-16 px-3 text-black md:h-20 md:p-0">
      <div className="mx-auto mt-14 flex max-w-[1136px] items-center justify-between rounded-[60px] border border-[#DEE5ED] px-5 py-4 shadow md:mt-9">
        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/logo/lightnav-logo.svg"
                alt="desktop-logo"
                width={138}
                height={32}
                className="hidden md:block"
              />
            </Link>
          </div>
          <div className="flex space-x-[56px] text-base font-normal text-[#9BB1C9]">
            <Link href="/">Home</Link>
            <Link href="/">Games</Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="focus:ring-none flex items-center gap-1 focus:border-none focus:outline-none">
                    About
                    <Image
                      src={open ? "/logo/about-up.svg" : "/logo/about-down.svg"}
                      alt="about-arrow"
                      width={16}
                      height={16}
                    />
                  </Popover.Button>
                  <Popover.Panel className="absolute left-[-70px] z-10 mt-2 w-[243px] rounded-[12px] bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <Link
                      href="/"
                      className="flex gap-3 border-b border-gray-200 px-4 py-[15px] text-sm text-[#102843]"
                    >
                      <Image
                        src="/logo/about-menu/howitworks.svg"
                        alt="howitworks-icon"
                        width={16}
                        height={16}
                      />
                      How It Works
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 border-b border-gray-200 px-4 py-[15px] text-sm text-[#102843]"
                    >
                      <Image
                        src="/logo/about-menu/waitlist.svg"
                        alt="waitlist-icon"
                        width={16}
                        height={16}
                      />
                      Waitlist
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 border-b border-gray-200 px-4 py-[15px] text-sm text-[#102843]"
                    >
                      <Image
                        src="/logo/about-menu/invitelink.svg"
                        alt="invitelink-icon"
                        width={16}
                        height={16}
                      />
                      Invite Link
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 border-b-8 border-[#FFF2E5] px-4 py-[15px] text-sm text-[#102843]"
                    >
                      <Image
                        src="/logo/about-menu/contactus.svg"
                        alt="contactus-icon"
                        width={16}
                        height={16}
                      />
                      Contact Us
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 px-4 py-[15px] text-sm text-[#102843]"
                    >
                      <Image
                        src="/logo/about-menu/privacypolicy.svg"
                        alt="privacypolicy-icon"
                        width={16}
                        height={16}
                      />
                      Privacy Policy
                    </Link>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>
          <div className="flex space-x-6">
            {isSignedIn ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="flex h-full w-full items-center gap-1 rounded-[40px] border-2 border-[#E9EEF3] px-[10px] py-1">
                      <Image
                        src="/logo/profile.svg"
                        alt="profile-icon"
                        width={45}
                        height={22}
                      />
                      <Image
                        src={
                          open ? "/logo/about-up.svg" : "/logo/about-down.svg"
                        }
                        alt="profile-arrow"
                        width={16}
                        height={16}
                      />
                    </Popover.Button>
                    <Popover.Panel className="absolute right-0 mt-2 w-[343px] rounded-t-[12px] bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="flex h-full flex-col gap-1 rounded-t-[12px] bg-[#2A2A2A] p-4">
                        <h3 className="text-[18px] font-medium text-white">
                          JohnDoe
                        </h3>
                        <p className="text-[#B1C2D5]">johndoe@gmail.com</p>
                      </div>
                      <Link
                        href="/"
                        className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                      >
                        <Image
                          src="/logo/profile-menu/Dashboard.svg"
                          alt="notifications-icon"
                          width={16}
                          height={16}
                        />
                        Dashboard
                      </Link>
                      <Link
                        href="/"
                        className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                      >
                        <Image
                          src="/logo/profile-menu/points.svg"
                          alt="points-icon"
                          width={16}
                          height={16}
                        />
                        Points & Badges
                      </Link>
                      <Link
                        href=""
                        className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                      >
                        <Image
                          src="/logo/profile-menu/settings.svg"
                          alt="settings-icon"
                          width={16}
                          height={16}
                        />
                        Settings
                      </Link>
                      <Link
                        href="/"
                        className="flex gap-3 border-b-8 border-[#FFF2E5] px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                      >
                        <Image
                          src="/logo/profile-menu/notification.svg"
                          alt="notifications-icon"
                          width={16}
                          height={16}
                        />
                        Notifications
                      </Link>
                      <Link
                        href="/"
                        className="text-red flex gap-3 px-4 py-[15px] text-sm hover:bg-gray-100"
                      >
                        <Image
                          src="/logo/profile-menu/signout.svg"
                          alt="signout-icon"
                          width={16}
                          height={16}
                        />
                        Sign Out
                      </Link>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            ) : (
              <>
                <button className="h-12 w-[132px] rounded-[59px] border border-[#1B1B1B] bg-[#2A2A2A] text-white">
                  Sign Up
                </button>
                <button className="h-12 w-[132px] rounded-[59px] border border-[#1B1B1B] bg-white text-[#2A2A2A]">
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex items-center">
            <Image
              src="/logo/mobile-nav.svg"
              alt="mobile-logo"
              width={32}
              height={32}
              className="block md:hidden"
            />
          </div>
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <Popover className="relative">
                <>
                  <Popover.Button className="h-full w-full rounded-full border-2 border-[#E9EEF3] p-1">
                    <Image
                      src="/logo/profile.svg"
                      alt="profile-icon"
                      width={36}
                      height={36}
                    />
                  </Popover.Button>
                  <Popover.Panel className="absolute right-0 mt-3 w-[283px] rounded-t-[12px] bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="flex h-full flex-col gap-1 rounded-t-[12px] bg-[#2A2A2A] p-4">
                      <h3 className="text-[18px] font-medium text-white">
                        JohnDoe
                      </h3>
                      <p className="text-[#B1C2D5]">johndoe@gmail.com</p>
                    </div>
                    <Link
                      href="/"
                      className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                    >
                      <Image
                        src="/logo/profile-menu/Dashboard.svg"
                        alt="Dashboard-icon"
                        width={16}
                        height={16}
                      />
                      Dashboard
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                    >
                      <Image
                        src="/logo/profile-menu/points.svg"
                        alt="points-icon"
                        width={16}
                        height={16}
                      />
                      Points & Badges
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                    >
                      <Image
                        src="/logo/profile-menu/settings.svg"
                        alt="settings-icon"
                        width={16}
                        height={16}
                      />
                      Settings
                    </Link>
                    <Link
                      href="/"
                      className="flex gap-3 border-b-8 border-[#FFF2E5] px-4 py-[15px] text-sm text-[#102843] hover:bg-gray-100"
                    >
                      <Image
                        src="/logo/profile-menu/notification.svg"
                        alt="notifications-icon"
                        width={16}
                        height={16}
                      />
                      Notifications
                    </Link>
                    <Link
                      href="/"
                      className="text-red flex gap-3 px-4 py-[15px] text-sm hover:bg-gray-100"
                    >
                      <Image
                        src="/logo/profile-menu/signout.svg"
                        alt="signout-icon"
                        width={16}
                        height={16}
                      />
                      Sign Out
                    </Link>
                  </Popover.Panel>
                </>
              </Popover>
            ) : (
              <>
                <button className="h-10 w-[109px] rounded-[59px] border border-[#E9EEF3] bg-[#2A2A2A] text-white">
                  Sign Up
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-[49px] border border-[#C7D3E1] bg-white p-[10px]">
                  <Image
                    src="/logo/mobile-3lines.svg"
                    alt="menu-icon"
                    width={20}
                    height={20}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LightNav;
