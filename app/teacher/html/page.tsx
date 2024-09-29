"use client";
import SideBar from "@/app/components/TeacherSidebar";
import Image from "next/image";
import { MyButton } from "@/app/components/buttons";
import framer from "framer-motion";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Page() {
  return (
    <main className=" flex w-full h-full text-white">
      <SideBar />
      <div className="flex flex-col mt-12 mx-20 gap-y-6">
        <h1 className="font-extrabold text-3xl">Kurs Html i css</h1>

        <div className=" w-full flex flex-col gap-y-3 h-full rounded-[2rem] border-gray-600 ">
          <div className=" w-full flex items-center overflow-auto justify-between  border-2 p-2 rounded-3xl border-gray-600 gap-x-16">
            <div className=" flex gap-x-6 items-center">
              <p className=" font-bold text-lg ml-3">Szymon Tryczynski</p>
              <div className=" flex justify-center font-extrabold  items-center text-center text-orange-600  rounded-xl">
                <p className=" text-2xl">7</p>
                <Image
                  src="/Images/reading.gif"
                  alt="flame"
                  width={40}
                  height={30}
                />
              </div>
            </div>
            <div className=" flex gap-x-5">
              <p>Przystąpił do kursu</p>
            </div>

            <CircularProgress
              classNames={{
                svg: "w-16 h-16 drop-shadow-md ",
                indicator: "stroke-teal-700",
                track: "stroke-white/10",
                value: "text-sm font-semibold text-white",
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
          </div>

          <div className=" w-full flex items-center overflow-auto justify-between  border-2 p-2 rounded-3xl border-gray-600 gap-x-16">
            <div className=" flex gap-x-6 items-center">
              <p className=" font-bold text-lg ml-3">Szymon Tryczynski</p>
              <div className=" flex justify-center font-extrabold  items-center text-center text-orange-600  rounded-xl">
                <p className=" text-2xl">2</p>
                <Image
                  src="/Images/reading.gif"
                  alt="flame"
                  width={40}
                  height={30}
                />
              </div>
            </div>
            <div className=" flex gap-x-5">
              <p>Przystąpił do kursu</p>
            </div>

            <CircularProgress
              classNames={{
                svg: "w-16 h-16 drop-shadow-md ",
                indicator: "stroke-teal-700",
                track: "stroke-white/10",
                value: "text-sm font-semibold text-white",
              }}
              value={35}
              strokeWidth={4}
              showValueLabel={true}
            />
          </div>

          <div className=" w-full flex items-center overflow-auto justify-between  border-2 p-2 rounded-3xl border-gray-600 gap-x-16">
            <div className=" flex gap-x-6 items-center">
              <p className=" font-bold text-lg ml-3">Szymon Tryczynski</p>
              <div className=" flex justify-center font-extrabold  items-center text-center text-orange-600  rounded-xl">
                <p className=" text-2xl">1</p>
                <Image
                  src="/Images/reading.gif"
                  alt="flame"
                  width={40}
                  height={30}
                />
              </div>
            </div>
            <div className=" flex gap-x-5">
              <p>Nie przystąpił do kursu</p>
            </div>

            <CircularProgress
              classNames={{
                svg: "w-16 h-16 drop-shadow-md ",
                indicator: "stroke-teal-700",
                track: "stroke-white/10",
                value: "text-sm font-semibold text-white",
              }}
              value={0}
              strokeWidth={4}
              showValueLabel={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
