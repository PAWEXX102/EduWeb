"use client";

import StudentSidebar from "@/app/components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "@/app/components/buttons";
import {useState,useEffect } from "react";

export default function Learn() {

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
    <div className=" flex text-white w-full">
      <StudentSidebar/>
      <nav className="flex flex-col w-full mt-7 overflow-auto">
        <div className="flex flex-row justify-center">
          {" "}
          <h1 className="text-4xl font-bold">
            <span className="text-lime-500">Temat 1:</span> Rodzaje obrabiarek
          </h1>
        </div>
        <div className="flex flex-row justify-center">
        </div>
        <div className="flex flex-row  mx-28 items-center gap-x-10 mt-20 sm:mt-5">
          <div className="w-[50rem]">
          <h1 className="text-4xl sm:text-2xl font-bold mb-4 sm:mb-2">Frezarki</h1>
            <h2 className="text-2xl font-semibold">Zalety:</h2>
            <div className="flex flex-row mt-2">
              <Image
                src="/images/correct.png"
                alt="correct"
                width={20}
                height={20}
              />
              <p className="font-light italic ml-1">Wysoka wydajność</p>
            </div>
            <div className="flex flex-row mt-1">
              <Image
                src="/images/correct.png"
                alt="correct"
                width={20}
                height={20}
              />
              <p className="font-light italic ml-1">Wszechstronność</p>
            </div>
            <div className="flex flex-row mt-1">
              <Image
                src="/images/correct.png"
                alt="correct"
                width={20}
                height={20}
              />
              <p className="font-light italic ml-1">Jakość pracy</p>
            </div>
            <p className="lg:text-lg md:text-md mt-2 flex text-wrap">
              Obrabiarka przeznaczona do obróbki skrawaniem powierzchni płaskich
              i kształtowych takich jak rowki, gwinty, koła zębate. Narzędziem
              obróbczym stosowanym na frezarce jest frez . Głównym ruchem
              powodującym skrawanie, jest ruch obrotowy i posuwisty narzędzia
              względem obrabianego przedmiotu. Obróbka na frezarkach nazywa się
              frezowaniem.
            </p>
            <div className="flex flex-row justify-center items-center">
            <MyButton className="flex mt-5 bg-green-800 text-white border-green-900">
                <Link href="/frezarki" >Enter tasks</Link>
            </MyButton>
            </div>
          </div>

          <Image
            src="/Images/frezarka.jpg"
            width={450}
            height={450}
            alt="frezarka"
            className={`ml-2 mb-7 rounded-2xl ${width > 800 ? "block" : "hidden"}`}
          />
        </div>
      </nav>
    </div>
  );
}
