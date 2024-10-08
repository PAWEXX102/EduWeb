"use client";

import { sideBarItems } from "@/app/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SideBar() {
  const pathname = usePathname();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <main
      className={` text-white bg-[#131f24] z-40 flex flex-row ${
        width < 1400 && width > 920 ? "max-w-[5.5rem]" : "w-[20rem]"
      } ${
        width < 920
          ? " absolute border-t-2 flex justify-center text-center bg-[#131f24] py-3 w-full flex-row bottom-0 items-center right-0 left-0 px-2"
          : " flex-col border-r-2 px-4 py-8"
      } border-slate-200/20`}
    >
      <div className=" w-max items-center text-center">
        {width < 1400 ? (
          <Image
            src="/Images/mascot.svg"
            width={35}
            height={50}
            alt="duolingo"
            className={`ml-2 mb-7 ${width < 920 ? "hidden" : "block"}`}
          />
        ) : (
          <h1 className=" font-extrabold text-4xl text-lime-400 ml-7 mb-7">
            EduWeb
          </h1>
        )}
      </div>
      <div
        className={`flex gap-2 w-[100%] justify-between ${
          width < 920 ? "flex-row" : "flex-col"
        }`}
      >
        {sideBarItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`flex rounded-2xl group border-2 transition-all w-full items-center ${
              width < 1400 && "justify-center"
            } text-base font-extrabold gap-4 p-3  cursor-pointer ${
              pathname == item.href
                ? "text-sky-300 border-[2px] border-sky-300/50 bg-sky-300/5"
                : "border-transparent hover:bg-gray-700/20"
            }`}
          >
            <Image
              src={`/Images/${item.title}.svg`}
              width={width < 1400 ? 24 : 32}
              height={24}
              alt={item.title}
            />
            {width < 1400 ? "" : <p className="   ">{item.title}</p>}
          </Link>
        ))}
        <button
          className={`flex rounded-2xl border-transparent group border-2 transition-all w-full active:bg-sky-300/5 items-center ${
            width < 1400 && "justify-center"
          } text-base font-extrabold gap-4 p-3  cursor-pointer
            ? "text-sky-300 border-[2px] hover:border-sky-300/50 bg-sky-300/5"
            : "border-transparent"
        }`}
        >
          <Image
            src={"/Images/log-out.png"}
            width={width < 1400 ? 24 : 32}
            height={24}
            alt={"Wyloguj"}
          />
          {width < 1400 ? "" : <p className="">{"Wyloguj"}</p>}
        </button>
      </div>
    </main>
  );
}
