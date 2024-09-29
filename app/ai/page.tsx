"use client";

import SideBar from '@/app/components/StudentSidebar';
import { useState, useEffect } from "react";
import Image from "next/image";
import { chatSession } from "../../utils/AiModel";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

export default function Page() {
  const [input, setInput] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [allMessages, setAllMessages] = useState<
    { prompt: string; role: string }[]
  >([]);
  const [isLoading, setLoading] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const GenerateChat = async () => {
    if (!input) return;
    setLoading(true);
    console.log("Generating chat...");
    setPrompt(input);
    const finalUser = { prompt: input, role: "user" };
    setAllMessages((prev) => [...prev, finalUser]);
    /*
    const result = await chatSession.sendMessage(input);
    setInput("");
    console.log(input);
    setLoading(false);
    const finalAi = { prompt: result.response.text(), role: "ai" };
    setAllMessages((prev) => [...prev, finalAi]);
    */
    setTimeout(() => {
      const finalAi = { prompt: "AIIII", role: "ai" };
      setAllMessages((prev) => [...prev, finalAi]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <main className=" text-white flex w-full h-full">
      <SideBar />
      <div
        className={` w-[50rem] h-full flex flex-col justify-center mx-auto ${
          width <= 920 && "pb-[6rem]"
        } py-10 pt-[5rem] ${width < 920 ? "px-5" : ""}`}
      >
        <div className=" w-full h-full flex flex-col gap-y-5 overflow-auto">
          {prompt.length <= 0 && (
            <>
              <h1
                className={` text-[#588ca0] ${
                  width <= 920 ? "text-4xl" : "text-5xl"
                }  font-extrabold`}
              >
                Witaj
              </h1>
              <p
                className={`font-bold text-[#2c4752] ${
                  width <= 920 ? "text-2xl" : "text-5xl"
                }`}
              >
                {"Rozwiążmy kilka problemów"}
              </p>
            </>
          )}

          {prompt.length > 0 && (
            <>
              {allMessages.map((message, index) => (
                <motion.div
                  initial={message.role == "user" && { opacity: 0, scale: 0.9 }}
                  animate={message.role == "user" && { opacity: 1, scale: 1 }}
                  key={index}
                  className={`flex items-start m-5 ${
                    message.role == "user" ? " flex-row-reverse" : ""
                  } gap-2`}
                >
                  <Image
                    src={`/Images/${message.role}.svg`}
                    width={`${width <= 920 ? 25 : 30}`}
                    height={30}
                    alt="User"
                  />
                  <motion.p
                    initial={message.role == "ai" && { opacity: 0 }}
                    animate={message.role == "ai" && { opacity: 1 }}
                    className="text-xl font-bold text-white"
                  >
                    <p className={`${width <= 920 ? "text-sm" : "text-base"}`}>
                      {message.prompt}
                    </p>
                  </motion.p>
                </motion.div>
              ))}
            </>
          )}
          {isLoading && (
            <div className=" flex items-center mt-5 ml-[1.25rem]">
              <Image src={`/Images/ai.svg`} width={30} height={40} alt="User" />
              <Spinner size="sm" color="default" />
            </div>
          )}
        </div>
        <div className=" w-full flex pt-5  h-24 flex-col justify-end gap-y-5">
          <div
            className={` w-full flex ${
              width <= 920 ? "h-12" : "h-full"
            } items-center gap-x-3 justify-center`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Set Prompt"
              className={` w-full p-4 h-full z-20 focus:border-sky-300/50 bg-transparent border-2 px-8 rounded-full font-extrabold outline-none border-[#1d2f37] ${
                width <= 920 ? " text-lg" : "text-xl"
              } `}
            />
            <motion.button
              className={`${
                input ? " cursor-pointer" : "disabled "
              } rounded-full border-2 hover:border-sky-300/50 active:bg-sky-300/5 cursor-default h-full right-4 px-[19px] flex items-center justify-center border-[#1d2f37] `}
              initial={{ opacity: 0, x: -7, display: "none" }}
              animate={
                input
                  ? { opacity: 1, x: 0, display: "block" }
                  : { opacity: 0, x: -7, display: "none" }
              }
            >
              <Image
                src="/Images/ai.svg"
                width={30}
                height={200}
                alt="send"
                onClick={GenerateChat}
                id="send"
                className={`hover:scale-110 z-10 transition-all active:scale-90`}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
