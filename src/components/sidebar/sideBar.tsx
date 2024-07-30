"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import progress from "../../../public/userSidebarNav/progress.png";
import learningRoom from "../../../public/userSidebarNav/learningRoom.png";
import achievements from "../../../public/userSidebarNav/achievements.png";
import leaderboards from "../../../public/userSidebarNav/leaderboard.png";
import challenges from "../../../public/userSidebarNav/challenges.png";
import logout from "../../../public/userSidebarNav/logout.png";

const sideItems = [
  {
    route: "Learning Room",
    link: "/learningRoom",
    icon: learningRoom,
    id: "Learning",
  },
  {
    route: "Progress Tracking",
    link: "/progress",
    icon: progress,
    id: "Progress",
  },
  {
    route: "Achievements",
    link: "/achievements",
    icon: achievements,
    id: "Achievements",
  },
  {
    route: "Leaderboards",
    link: "/leaderboard",
    icon: leaderboards,
    id: "Leaderboards",
  },
  {
    route: "Challenges",
    link: "/challenges",
    icon: challenges,
    id: "Challenges",
  },
];

interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: StaticImageData; // Correct type here
    id: string;
  }[];
  currenPathName?: string;
}

const Sidebar: FC<Iproperties> = ({ sideNavitems = sideItems }) => {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[3];
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 flex h-screen w-full flex-col md:items-center justify-start border-r bg-[#FDFDFD] md:block md:w-[220px] lg:w-[252px]">
      <div className="hidden md:flex flex-col justify-between h-full w-[100%]">
        <section className="flex flex-col justify-center items-center gap-y-3 pt-6 md:items-stretch md:px-4 text-[14px] mx-auto">
          {sideNavitems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              data-testid={item.id}
              role="sidebar-link"
              onClick={() => setClickedLink(item.id)}
              className={`${
                clickedLink === item.id
                  ? "bg-[#FE8B4C] text-white"
                  : currentPath === item.id
                  ? "bg-Primary/90 text-white rounded-[12px]"
                  : "bg-transparent text-neutral-dark-2 hover:bg-gray-200"
              } flex items-center justify-center gap-2.5 px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-xl h-[52px] w-[233px]`}
            >
              <Image src={item.icon} alt={`${item.route} icon`} className="h-5 w-5" role="sidebar-icon" width={28} />
              <span className="hidden md:block">{item.route}</span>
            </Link>
          ))}
        </section>
        <div className="flex items-center justify-center text-[#FF1925] text-[14px] h-[100px] w-full border-t-4 border-[#FFDECC]">
          <div className="flex items-center gap-[10px] hover:bg-gray-200 mx-auto px-[32px] h-[52px] rounded-xl">
            <div><Image src={logout} alt="" width={28} height={28} /></div>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
