"use client";

import { MyButton } from "@/app/components/buttons";
import SideBar from "@/app/components/TeacherSidebar";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <main className=" text-white flex w-full h-full">
      <SideBar />
      <div className=" w-full h-full gap-y-16 flex flex-col items-center p-10">
        <div className=" w-[35rem] p-3 h-[12rem] justify-evenly flex flex-row-reverse  items-center gap-x-5 bg-purple-500 rounded-3xl">
          <Image
            src="/Images/girl.svg"
            width={120}
            height={200}
            alt="teacher"
          />
          <h1 className=" text-2xl font-black">
            Welcome ! <br />{" "}
            <p className=" font-bold text-xl">
              Here you can manage your class.
            </p>
          </h1>
        </div>
        <div className=" w-full h-full flex flex-col items-center">
          <div className=" w-full flex items-center justify-between hover:border-sky-300/50 border-2 p-5 rounded-3xl border-gray-600">
            <p className=" font-bold text-2xl">3TP</p>
            <div className=" flex gap-x-5">
              <MyButton
                color="active"
                onClick={onOpen}
                className=" bg-yellow-500 border-yellow-800 rounded-2xl"
              >
                Details
              </MyButton>
              <MyButton
                color="active"
                className=" bg-red-500 border-red-800 rounded-2xl"
              >
                Delete
              </MyButton>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        className="bg-[#131f24] text-white"
        scrollBehavior="inside"
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className=" font-extrabold">Class Details {"3TP"}</h1>
              </ModalHeader>
              <ModalBody>
                <div className=" w-full flex flex-col gap-y-3 h-full rounded-[2rem] border-gray-600">
                  <div className=" w-full flex items-center overflow-auto justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Szymon Tryczynski</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div>
                  <div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Przemek Zagaja</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div>
                  <div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div><div className=" w-full flex items-center justify-between  border-2 p-2 rounded-3xl border-gray-600">
                    <p className=" font-bold text-lg ml-3">Paweł Sarzyński</p>
                    <div className=" flex gap-x-5">
                      <MyButton
                        color="active"
                        size="md"
                        className=" bg-red-500 border-red-800 rounded-2xl"
                      >
                        Delete
                      </MyButton>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <MyButton
                  color="active"
                  className="bg-sky-500 border-sky-700 rounded-xl"
                  size="md"
                  onClick={onClose}
                >
                  Save
                </MyButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
