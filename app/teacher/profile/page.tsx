"use client";

import SideBar from "../../components/TeacherSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className=" flex w-full h-full text-white">
      <SideBar />
      <div className=" w-[90rem] mx-auto flex p-10">
        <div className=" flex flex-col gap-y-2">
          <h1 className=" font-black text-6xl">
            Witamy, <span className=" text-lime-400">Maria</span>
          </h1>
          <h1 className="mt-5 font-black text-4xl mb-5">Twoje kursy</h1>
          <div className="flex flex-row gap-x-8">
            <div className="flex  justify-center border-4 border-gray-400 w-[15rem] h-[15rem] rounded-2xl hover:scale-105 hover:border-lime-400 active:scale-95">
              <Link href="/teacher/html" className="flex flex-col items-center gap-y-2">
                <h2 className="text-xl font-bold pt-8 pb-2 mx-auto ">
                  Kurs Html i css
                </h2>
                <Image
                  src="/images/code.png"
                  width={100}
                  height={100}
                  alt="coding"
                />
              </Link>
            </div>

            <div className="flex  justify-center border-4 border-gray-400 w-[15rem] h-[15rem] rounded-2xl hover:scale-105 hover:border-lime-400 active:scale-95">
              <Link href="/teacher/cnc" className="flex flex-col items-center gap-y-2">
                <h2 className="text-xl font-bold pt-8 pb-2 mx-auto text-wrap">
                  Obrabiarki CNC
                </h2>
                <Image
                  src="/images/optimization.png"
                  width={100}
                  height={100}
                  alt="coding"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};