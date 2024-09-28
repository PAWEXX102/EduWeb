import StudentSidebar from "../components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "../components/buttons";
import {RoundedButton} from "../components/buttons";

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
            <div className="flex flex-col mt-[14rem]">
                <RoundedButton className="flex text-black rounded-full">
                    1
                </RoundedButton>
            </div>
        </div>
    );
}