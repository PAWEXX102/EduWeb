import StudentSidebar from "@/app/components/StudentSidebar";
import Image from "next/image";
import { MyButton } from "@/app/components/buttons";


export default function Learn() {
  return (
    <div className=" flex text-white w-full h-full">
      <StudentSidebar />
      <div className=" w-[50rem] items-center pt-5 text-center flex justify-center mx-auto px-5 flex-col">
        <div className=" w-full flex flex-col items-center">
          <Image
            src="/Images/shield.png"
            width={150}
            height={200}
            alt="shield"
          />
          <h1 className=" text-2xl font-black text-white">
            Unlock Leaderboard
          </h1>
          <p className=" text-lg text-[#619db7]">
            You have to complete at least 3 courses to unlock the leaderboard.
          </p>
          <MyButton color="secondary" className=" mt-5 rounded-2xl">
            Start Learning
          </MyButton>
        </div>
        <div className=" flex w-full  items-center mb-24 mt-20 gap-y-10 overflow-auto flex-col">
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/30"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/30"></div>
              <div className=" w-14 h-4 bg-white/30 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/30 rounded-full"></div>
          </div>{" "}
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className="mr-8 font-black text-xl">1</div>
              <Image
                src="/Images/Profile.svg"
                width={40}
                height={30}
                alt="User"
                className="mr-8"
              />

              <p className=" font-extrabold text-lg">Przemek Zagaja</p>
            </div>
            <div className=" flex items-center">
              <p className=" font-bold text-lg">25</p>
              <Image
                src="/Images/points.svg"
                width={30}
                height={30}
                alt="flame"
              />
            </div>
          </div>{" "}
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/20"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/20"></div>
              <div className=" w-10 h-4 bg-white/20 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/20 rounded-full"></div>
          </div>{" "}
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/15"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/15"></div>
              <div className=" w-12 h-4 bg-white/15 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/15 rounded-full"></div>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/10"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/10"></div>
              <div className=" w-16 h-4 bg-white/10 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/10 rounded-full"></div>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/5"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/5"></div>
              <div className=" w-14 h-4 bg-white/5 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/5 rounded-full"></div>
          </div><div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/5"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/5"></div>
              <div className=" w-14 h-4 bg-white/5 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/5 rounded-full"></div>
          </div><div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/5"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/5"></div>
              <div className=" w-14 h-4 bg-white/5 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/5 rounded-full"></div>
          </div><div className=" w-full flex items-center justify-between">
            <div className=" flex items-center">
              <div className=" size-4 mr-8 rounded-full bg-white/5"></div>
              <div className=" size-10 mr-8 rounded-full bg-white/5"></div>
              <div className=" w-14 h-4 bg-white/5 rounded-full"></div>
            </div>
            <div className=" w-10 h-4 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
