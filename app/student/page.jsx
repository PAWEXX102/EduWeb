"use client";

import StudentSidebar from "../components/StudentSidebar";
import Link from "next/link";
import Image from "next/image";
import { MyButton } from "../components/buttons";
import { RoundedButton } from "../components/buttons";
import { motion } from "framer-motion";
import { LearnItems } from "@/app/constants/index";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


export default function Learn() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-row  relative text-white w-full">
            <StudentSidebar />
            <nav className="absolute flex flex-row justify-center w-full">
                <div className="flex flex-col">
                    <div className="flex flex-row bg-green-500 mt-7 pr-7 py-6 rounded-3xl xl:w-[50rem] lg:w-[30rem] md:w-[45rem] mx-4 justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-white font-bold lg:text-xl md:text-lg text-gray-50 px-5">Moduł 1 Sekcja 1</h1>
                            <h1 className="text-white text-lg text-gray-50 px-5">Naucz się z nami zawodowych</h1>
                        </div>
                        <MyButton onPress={onOpen}>
                            <Image src="/images/notepad.png" alt="przevodnik" width={35} height={35} />
                            <p className="lg:text-lime-500">PRZEWODNIK</p>
                        </MyButton>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col mt-[12rem]">

                <h1 className="text-3xl text-gray-300 font-bold py-4 ml-10 ">Dział 1: Budowa maszyn CNC:</h1>
                <div className="flex flex-row gap-x-3 ml-10 items-center flex-wrap gap-y-3">
                    {LearnItems.map((item, index) => (
                        <Link className="flex text-green-900 bg-green-400 rounded-full px-7 py-5 border-green-900 text-xl font-extrabold border-3 active:scale-90" href={item.href}
                            key={index}>{item.title}
                        </Link>
                    )
                    )}

                    <MyButton className="text-gray-500 py-8">
                        Odbierz nagrodę
                        <Image src="/images/present.gif" alt="nagroda" width={60} height={60} />
                    </MyButton>
                </div>
            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Obrabiarki CNC</ModalHeader>
                            <ModalBody>
                                <p>
                                    Witaj w naszym kursie. Nauczymy cię tutaj o obrabiarkach
                                    sterowanych numerycznie CNC.
                                </p>
                                <p>
                                    <strong>Precyzja:</strong> Obrabiarki CNC oferują wyjątkową dokładność, co sprawia, że są idealne do produkcji skomplikowanych elementów.
                                </p>
                                <p>
                                    <strong>Wielofunkcyjność:</strong> Mogą wykonywać różne operacje, takie jak frezowanie, toczenie, wiercenie czy cięcie laserowe.
                                </p>
                                <p>
                                <strong>Automatyzacja:</strong> Dzięki komputerowemu sterowaniu możliwe jest zminimalizowanie błędów ludzkich oraz zwiększenie wydajności.
                                </p>
                                <p>
                                 <strong>Elastyczność: </strong>Umożliwiają szybkie zmiany w produkcji, co jest szczególnie istotne w przemyśle prototypowym i małoseryjnym.
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