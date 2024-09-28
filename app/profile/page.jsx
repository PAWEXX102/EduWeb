"use client";

import StudentSidebar from "../components/StudentSidebar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex text-white w-full">
      <StudentSidebar />
      <nav className="flex flex-col mt-10 mx-28 gap-y-2 w-full ">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col  ">
            <p className="font-extrabold text-5xl">
              Witaj <span className="text-green-500">Przemek!</span>
            </p>
            <p className="text-gray-400 font-bold ml-5 text-md">
              W aplikacji od 09 września 2024
            </p>
          </div>
          <Image
            src="/images/poland.png"
            alt="Flaga Polski"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col mt-[3rem] gap-y-5">
          <h2 className="text-2xl font-extrabold text-gray-400">Kursy</h2>
        </div>
        <section className="flex flex-col mt-[3rem] gap-y-5">
          <h2 className="text-2xl font-extrabold text-gray-400">Statystyki</h2>
          <div className="flex flex-row items-center justify-center gap-x-10">
            <div className="flex flex-row border-3 border-gray-400 rounded-xl w-[22rem] py-3 gap-x-2 items-center justify-center">
              <Image
                src="/images/thunder.png"
                alt="thunder"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <p className="text-gray-400 font-bold text-xl">0</p>
                <p className="text-gray-400 font-bold text-xl">Punkty</p>
              </div>
            </div>
            <div className="flex flex-row border-3 border-gray-400 rounded-xl w-[22rem] py-3 gap-x-2 items-center justify-center">
              <Image
                src="/images/ogien.png"
                alt="Flames"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <p className="text-gray-400 font-bold text-xl">0</p>
                <p className="text-gray-400 font-bold text-xl">Seria</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-x-10">
            <div className="flex flex-row border-3 border-gray-400 rounded-xl w-[22rem] py-3 gap-x-2 items-center justify-center">
              <Image
                src="/images/medal.png"
                alt="Flames"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-gray-400 font-bold text-xl">Najlepsze</p>
                <p className="text-gray-400 font-bold text-xl">miejsce</p>
              </div>
            </div>
            <div className="flex flex-row border-3 border-gray-400 rounded-xl w-[22rem] py-3 gap-x-2 items-center justify-center">
              <Image
                src="/images/ogien.png"
                alt="Flames"
                width={60}
                height={60}
              />
              <div className="flex flex-col">
                <p className="text-gray-400 font-bold text-xl">0</p>
                <p className="text-gray-400 font-bold text-xl">Punkty</p>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </main>
  );
}
