import SideBar from "../../components/TeacherSidebar";
import Image from "next/image";

export default function Page() {
  return (
    <main className=" flex w-full h-full text-white">
      <SideBar />
      <div className=" w-[90rem] mx-auto flex p-10">
        <div className=" flex flex-col gap-y-2">
          <h1 className=" font-black text-6xl">
            Witaj, <span className=" text-lime-400">Maria</span>
          </h1>
          <h1 className=" font-extrabold text-2xl">
            Użytkownik od: <span className=" text-lime-400">28.09.2021</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
