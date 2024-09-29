"use client";
import { MyButton } from "./components/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between w-full py-5 text-center text-white bg-white ">
      <nav className="w-full ">
        <h1 className="text-4xl font-extrabold text-lime-500">EduWeb</h1>
      </nav>
      <div className="flex flex-col items-center my-auto ">
        <p className=" text-4xl font-extrabold mb-14 text-zinc-600 max-w-[35rem] px-10">
          A free, fun and effective way to learn a language!
        </p>
        <div className="flex-col absolute sm:flex sm:static bottom-0 px-5 w-full items-center max-w-[25rem]">
          <MyButton color="active" className="w-full ">
            <Link href="/?isLogin=true">GET STARTED</Link>
          </MyButton>
          <MyButton
            onClick={() => router.push("/?isLogin=true")}
            color="primary"
            className="w-full mt-3 mb-5 "
          >
            I ALREADY HAVE AN ACCOUNT
          </MyButton>
        </div>
      </div>
    </main>
  );
}