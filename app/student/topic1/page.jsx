import StudentSidebar from "@/app/components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";

export default function Learn() {


  return (
<div className=" flex text-white w-full">
      <StudentSidebar />
      <nav className="flex flex-row justify-center w-full">
      <div>
      <div className="flex flex-row bg-green-500 mt-7 px-7 py-5  ">
        <div className="flex flex-col">
            <h1 className="text-white font-bold text-sm text-gray-50 px-5">Moduł 1,Sekcja 1</h1>
        </div>
      <div className="flex flex-row text-green-500 bg-white border-3 border-green-500 rounded-lg hover:bg-green-500 hover:border-white hover:text-white">
      <Link href="/student/przewodnik" className="px-3 py-1 font-bold text-md flex flex-row items-center rounded-md" >
      <Image src="/images/notepad.png" alt="przevodnik" width={40} height={40} />
      <p className="">PRZEWODNIK</p></Link>
      </div>
      </div>
      </div>
      </nav>

</div>
  );
}