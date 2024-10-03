"use client";

import { MyButton } from "@/app/components/buttons";
import { ProgrammingTasks } from "@/app/tasks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [issubmit, setIssubmit] = useState<boolean>(false);
  const [isLodaing, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = () => {
    setIsLoading(true);
    if (select != "" && Task && Task.Right_answer === select) {
      Task.Complete = true;
      setIsCorrect(true);
      setIsLoading(false);
      setIssubmit(true);
    } else {
      Task.Complete = false;
      setIsCorrect(false);
      setIssubmit(true);
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    setSelect("");
    Task.Complete = false;
    setIsCorrect(false);
    setIssubmit(false);
    setIsLoading(false);
    if (ID + 1 === 6) {
      router.push(`/student`);
      return;
    } else router.push(`/training/${params.section}?id=${ID + 1}`);
  };

  const handleNext = () => {
    setSelect("");
    setIsCorrect(false);
    setIssubmit(false);
    setIsLoading(false);
    if (ID + 1 === 6) {
      router.push(`/student`);
      return;
    } else router.push(`/training/${params.section}?id=${ID + 1}`);

    console.log(ProgrammingTasks);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (Task && Task.Options) {
        Object.entries(Task.Options).forEach(([key, value], index) => {
          if (e.key === (index + 1).toString()) {
            setSelect(key);
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [Task, Task.Options, setSelect]);
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
                disabled={issubmit}
                className={` flex items-center transition-all active:scale-90 hover:scale-110 relative border-2 rounded-3xl w-[15rem] h-[15rem] p-3 ${
                  select === key
                    ? "border-sky-300/50 bg-sky-300/5 scale-110"
                    : "border-gray-500"
                }`}
              >
                <h2 className="text-3xl font-black absolute top-3 left-4">
                  {key.toLocaleUpperCase()}
                </h2>
                <p className="text-xl font-black border-2 px-3 rounded-2xl border-gray-600 py-1 absolute top-2 right-2">
                  {index + 1}
                </p>
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
      <div className=" overflow-hidden flex items-center absolute justify-center bottom-0 w-full border-t-2 border-gray-600 mx-auto left-0 right-0 h-28">
        <motion.div
          animate={!issubmit ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className=" flex w-full absolute"
        >
          <MyButton
            onClick={() => handleSkip()}
            color="secondary"
            className=" w-[15rem] mx-auto border-gray-600 h-[4rem] text-2xl"
          >
            Pomiń
          </MyButton>
          <MyButton
            onClick={() => handleSubmit()}
            color="active"
            {...(select === "" ? { isDisabled: true } : {})}
            {...(isLodaing ? { isLoading: true } : {})}
            className=" w-[15rem] mx-auto h-[4rem] text-2xl"
          >
            Zatwierdź
          </MyButton>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            issubmit
              ? { y: 0, opacity: 1 }
              : {
                  y: 50,
                  opacity: 0,
                }
          }
          className=" flex items-center w-full justify-center absolute"
        >
          <Image
            src={isCorrect ? "/Images/mascot.svg" : "/Images/mascot_bad.svg"}
            alt="maskotka"
            width={75}
            height={40}
          />
          <div className=" ml-5 flex flex-col text-start">
            <p
              className={` text-4xl font-extrabold ${
                isCorrect ? "text-green-400" : "text-red-400"
              } `}
            >
              {isCorrect ? "Poprawna odpowiedz." : "Nie poprawna odpowiedz."}
            </p>
            <p className="text-xl font-bold">
              {!isCorrect &&
                `Poprawna odpowiedz to: ${Task.Right_answer.toUpperCase()}`}
            </p>
          </div>
          <MyButton
            onClick={() => handleNext()}
            className={` w-[15rem] ml-[20rem] text-white ${
              isCorrect
                ? "bg-sky-500 border-sky-700"
                : "bg-red-400 border-red-700"
            }  h-[4rem] text-2xl`}
          >
            {ID + 1 == 6 ? "Zakończ" : "Następne"}
          </MyButton>
        </motion.div>
      </div>
    </main>
  );
}
