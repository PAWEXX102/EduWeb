import StudentSidebar from "@/app/components/StudentSidebar";
import Image from "next/image";

export default function Learn() {
  return (
    <div className=" flex text-white w-full h-full">
      <StudentSidebar />
      <div className=" w-full items-center justify-center text-center flex ">
        <Image src="/Images/shield.png" width={200} height={200} alt="shield" />
        <h1 className=" text-2xl font-black text-white">Unlock Leaderboard</h1>
        <p className=" text-lg text-[#619db7]">
          You have to complete at least 3 courses to unlock the leaderboard.
        </p>
      </div>
    </div>
  );
}
