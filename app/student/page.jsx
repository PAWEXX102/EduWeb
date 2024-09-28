import StudentSidebar from "../components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "../components/buttons";
import { RoundedButton } from "../components/buttons";
import { motion } from "framer-motion";
import { LearnItems } from "@/app/constants/index";

export default function Learn() {


    return (
        <div className="flex flex-row  relative text-white w-full">
            <StudentSidebar />
            <nav className="absolute flex flex-row justify-center w-full">
                <div className="flex flex-col">
                    <div className="flex flex-row bg-green-500 mt-7 pr-7 py-6 rounded-3xl w-[50rem] justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-white font-bold text-2xl text-gray-50 px-5">Moduł 1 Sekcja 1</h1>
                            <h1 className="text-white text-lg text-gray-50 px-5">Naucz się z nami zawodowych</h1>
                        </div>
                        <MyButton>
                            <Image src="/images/notepad.png" alt="przevodnik" width={40} height={40} />
                            <p className="text-lime-500">PRZEWODNIK</p>
                        </MyButton>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col mt-[12rem]">

                <h1 className="text-3xl text-gray-300 font-bold py-4 ml-10 ">Dział 1: Budowa maszyn CNC:</h1>
                <div className="flex flex-row gap-x-3 ml-10 items-center">
                    {LearnItems.map((item, index) => (
                        <Link className="flex text-green-900 bg-green-400 rounded-full px-7 py-5 border-green-900 text-xl font-extrabold border-3 active:scale-90" href={item.href}
                            key={index}>{item.title}
                        </Link>
                    )
                    )}

                    <MyButton className="text-gray-500">
                        Odbierz nagrodę
                        <Image src="/images/present.gif" alt="nagroda" width={60} height={60} />
                    </MyButton>
                </div>
            </div>
        </div>
    );
}