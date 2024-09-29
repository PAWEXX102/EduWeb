"use client";

import StudentSidebar from "../components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "../components/buttons";
import { LearnItems } from "@/app/constants/index";
import { useState, useEffect } from "react";
import { ProgrammingTasks } from "@/app/tasks/index";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Learn() {
  const { isOpen, onOpenChange } = useDisclosure();

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    console.log(ProgrammingTasks);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="flex text-white w-full">
      <StudentSidebar />
      <div className="flex overflow-auto gap-y-10 mb-24 sm:mb-0 justify-center flex-col relative w-[70rem] mx-auto items-center">
        <div className=" absolute right-0 top-11 flex"></div>
        {Object.values(ProgrammingTasks).map((task: any, index: any) => (
          <div
            key={index}
            className=" flex flex-col pt-[25rem] md:pt-0 w-full items-center"
          >
            <h1 className="text-3xl text-gray-300 font-bold py-4 ml-10 ">
              {task.title}
            </h1>
            <div className="flex p-2 rounded-3xl h-full flex-row gap-x-3 ml-10 items-center flex-wrap gap-y-3">
              {LearnItems.map((item,key) => (
                <>
                  <Link
                    className={`flex  border-b-[6px] active:border-b-3 rounded-3xl ${
                      task[key + 1]?.Complete === true
                        ? "border-green-900 bg-green-400 text-green-900"
                        : " bg-purple-400 border-purple-900 text-purple-900"
                    }text-xl font-extrabold border-3 active:scale-90 ${
                      width < 1400 ? "py-3 px-5" : "py-5 px-7"
                    }`}
                    href={"/training/" + index + "?id=" + item.title}
                    key={index}
                  >
                    {item.title}
                  </Link>
                  <div className=" h-4 w-14 bg-gray-600/30 rounded-full"></div>
                </>
              ))}
              <MyButton
                color="secondary"
                isDisabled
                size="xl"
                className={` text-white rounded-2xl ${
                  width < 1400 ? "h-[61px]" : "h-[77px]"
                }`}
              >
                Odbierz
                <Image
                  src="/Images/points.svg"
                  alt="nagroda"
                  width={width < 1400 ? 30 : 40}
                  height={width < 1400 ? 30 : 40}
                />
              </MyButton>
            </div>
          </div>
        ))}
        <motion.div className="flex absolute top-6 left-0 right-0 mx-auto flex-row py-2 pr-2 rounded-full xl:w-[30rem] lg:w-[25rem] md:w-[20rem] w-[10rem] justify-end bg-black border-gray-600/50">
          <button className=" flex items-center p-2 hover:bg-gray-600/50 rounded-full">
            <Image
              src="/Images/jp.svg"
              alt="kurs"
              width={35}
              height={40}
              className="rounded-full"
            />
          </button>
          <button className=" flex items-center pl-2 py-1 hover:bg-gray-600/50 rounded-full">
            <p className="text-white text-2xl font-bold">0</p>
            <Image
              src="/Images/points.svg"
              alt="nagroda"
              width={35}
              height={40}
            />
          </button>
        </motion.div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Obrabiarki CNC
              </ModalHeader>
              <ModalBody>
                <p>
                  Witaj w naszym kursie. Nauczymy cię tutaj o obrabiarkach
                  sterowanych numerycznie CNC.
                </p>
                <p>
                  <strong>Precyzja:</strong> Obrabiarki CNC oferują wyjątkową
                  dokładność, co sprawia, że są idealne do produkcji
                  skomplikowanych elementów.
                </p>
                <p>
                  <strong>Wielofunkcyjność:</strong> Mogą wykonywać różne
                  operacje, takie jak frezowanie, toczenie, wiercenie czy cięcie
                  laserowe.
                </p>
                <p>
                  <strong>Automatyzacja:</strong> Dzięki komputerowemu
                  sterowaniu możliwe jest zminimalizowanie błędów ludzkich oraz
                  zwiększenie wydajności.
                </p>
                <p>
                  <strong>Elastyczność: </strong>Umożliwiają szybkie zmiany w
                  produkcji, co jest szczególnie istotne w przemyśle
                  prototypowym i małoseryjnym.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
