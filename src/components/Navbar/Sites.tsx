/* eslint-disable @next/next/no-img-element */
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";
import AlignRight from "@/assets/icons/Align-Right.png";
import Xmark from "@/assets/icons/Xmark.png";

type Props = {};

const NavSites = [
  {
    name: "Home",
    route: "home",
  },
  {
    name: "About",
    route: "about",
  },
  {
    name: "Works",
    route: "works",
  },
  {
    name: "Services",
    route: "services",
  },
  {
    name: "Contact",
    route: "contact",
  },
];

const Navbar = (props: Props) => {
  const SMmediQuery = useMediaQuery("(max-width: 576px)");
  const [SMtoggle, setSMToggle] = useState<boolean>(false);

  return (
    <nav className="relative flex h-full w-1/3 items-center justify-end">
      {SMmediQuery ? (
        <>
          {SMtoggle ? (
            <div className="z-60 absolute top-0 z-50 flex h-screen w-full translate-x-6 -translate-y-1 flex-col items-end gap-16 bg-orange-550 p-4">
              <div
                className="right-0 text-white"
                onClick={() => setSMToggle((prev) => !prev)}
              >
                <Image
                  src={Xmark}
                  alt={"Xmark SM"}
                  width={30}
                  height={30}
                  className="text-white"
                />
              </div>
              <ul className="flex w-full flex-col items-center justify-center gap-8 text-white">
                {NavSites.map((sites) => (
                  <li
                    key={sites.name}
                    className="no-underline decoration-white decoration-2 hover:cursor-pointer hover:underline hover:underline-offset-8"
                  >
                    <Link to={sites.route} smooth={true} >{sites.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="" onClick={() => setSMToggle((prev) => !prev)}>
              <Image
                src={AlignRight}
                alt={"AlignRight SM"}
                width={30}
                height={30}
              />
            </div>
          )}
        </>
      ) : (
        <ul className="flex w-full items-center justify-center gap-8">
          {NavSites.map((sites) => (
            <li
              key={sites.name}
              className="no-underline decoration-[#E94E35] decoration-2 hover:cursor-pointer hover:underline hover:underline-offset-8"
            >
              <Link to={sites.route} smooth={true} >{sites.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
