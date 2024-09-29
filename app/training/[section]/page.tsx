"use client";

import { MyButton } from "@/app/components/buttons";
import { ProgrammingTasks } from "@/app/tasks";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    section: number;
  };
}) {
  const searchParams = useSearchParams();
  const ID = Number(searchParams.get("id"));
  const Task = ID && ProgrammingTasks[Number(params.section)][ID];
  const [select, setSelect] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    if (select != "" && Task && Task.Right_answer === select) {
      Task.Complete = true;
      router.push(`/student`);
    } else {
      alert("Incorrect");
    }
  };

  return (
    <main className=" px-10 flex text-white flex-col gap-y-16 justify-center w-full text-center">
      <h1 className=" text-4xl font-black">{Task ? Task.Task : ""}</h1>
      <div className=" flex w-full justify-center gap-x-10">
        {Task && Task.Options ? (
          <>
            {Object.entries(Task.Options).map(([key, value], index) => (
              <button
                onClick={() => setSelect(key)}
                key={index}
                className={`flex items-center transition-all active:scale-90 hover:scale-110 relative border-2 rounded-3xl w-[15rem] h-[15rem] p-3 ${
                  select === key
                    ? "border-sky-300/50 bg-sky-300/5"
                    : "border-gray-500"
                }`}
              >
                <h2 className="text-3xl font-black absolute top-2 left-4">
                  {key}
                </h2>
                <p className="text-xl font-bold px-5">
                  {value as React.ReactNode}
                </p>
              </button>
            ))}
          </>
        ) : (
          <input
            onChange={(e) => setSelect(e.target.value)}
            value={select}
            type="text"
            placeholder="Enter your answer"
            className=" p-3 bg-transparent font-bold text-xl rounded-3xl w-[30rem] outline-none border-2 border-gray-600"
          />
        )}
      </div>
      <MyButton
        onClick={() => handleSubmit()}
        color="active"
        className=" w-[15rem] mx-auto"
      >
        Zatwierdź
      </MyButton>
    </main>
  );
}
