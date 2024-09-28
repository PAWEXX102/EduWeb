import StudentSidebar from "@/app/components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "@/app/components/buttons";

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
        <div className="flex flex-row justify-center">
        </div>
        <div className="flex flex-row mt-5 mx-28 items-center gap-x-10 mt-20">
          <div className="w-[50%]">
          <h1 className="text-4xl font-bold  mb-7">Frezarki</h1>
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
              <p className="font-light italic ml-1">Jakość wykonywanej pracy</p>
            </div>
            <p className="text-lg mt-2">
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
          <div className="w-[50%]">
            <Image
              src="/images/frezarka.jpg"
              alt="frezarka"
              width={450}
              height={450}
              className="rounded-2xl"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
