import StudentSidebar from "@/app/components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";

export default function Learn() {
  return (
    <div className=" flex text-white w-full">
      <StudentSidebar />
      <nav className="flex flex-col w-full mt-7">
        <div className="flex flex-row justify-center">
          {" "}
          <h1 className="text-4xl font-bold">
            <span className="text-lime-500">Temat 1:</span> Rodzaje obrabiarek
          </h1>
        </div>
        <h1 className="text-4xl font-bold mt-20 items-center justify-center">Frezarki</h1>
        <div className="flex flex-row mt-5 mx-28 items-center gap-x-10">
          <div className="w-[50%]">
            <p className="text-lg">
              obrabiarka przeznaczona do obróbki skrawaniem powierzchni płaskich
              i kształtowych takich jak rowki, gwinty, koła zębate. Narzędziem
              obróbczym stosowanym na frezarce jest frez[1]. Głównym ruchem
              powodującym skrawanie, jest ruch obrotowy i posuwisty narzędzia
              względem obrabianego przedmiotu. Obróbka na frezarkach nazywa się
              frezowaniem.
            </p>
          </div>
          <div className="w-[50%]">
            <Image
              src="/images/frezarka.jpg"
              alt="frezarka"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
