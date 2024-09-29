"use client";

import { motion } from "framer-motion";
import { MyButton } from "./buttons";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import { auth, db } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRegisterValidation, useLoginValidation } from "../validation/auth";
import InputForm from "./input";
import { useRouter } from "next/navigation";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cnfPassword, setCnfPassword] = useState<string>("");
  const [formType, setFormType] = useState<"Login" | "Register">("Login");
  const [role,setRole] = useState<"Student" | "Teacher">("Student");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useRegisterValidation();

  const searchParams = useSearchParams();
  const search = searchParams.get("isLogin");

  const {
    handleSubmit: handleLoginSubmit,
    register: loginRegister,
    formState: { errors: loginErrors },
  } = useLoginValidation();

  const GetUserData = async (values: any, ID: any) => {
    const docRef = doc(db, "Users", ID);
    await setDoc(docRef, {
      username: values.username,
      email: values.email,
      password: values.password,
      createdAt: Timestamp.now(),
      points:0,
    });
    console.log("Document written with ID: ", docRef.id);
  };


  const handlePageChange = () => {
    setFormType(formType === "Login" ? "Register" : "Login");
    setEmail("");
    setUsername("");
    setPassword("");
    setCnfPassword("");
    reset();
  };

  const router = useRouter();

  interface FormValues {
    email: string;
    username?: string;
    password: string;
    cnfPassword?: string;
    role?:boolean;
  }

  const submitForm = async (values: FormValues) => {
    if (formType === "Register") {
      console.log("Register form values", values);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          if (auth.currentUser) {
            updateProfile(auth.currentUser, {
              displayName: values.username,
            });
          }
          GetUserData(values, auth.currentUser?.uid);
          setEmail("");
          setUsername("");
          setPassword("");
          setCnfPassword("");
          setRole;

          reset();
          router.push("/student");
        })
        .catch((e) => {
          console.log("catch ", e.message);
          alert("Something went wrong please try again");
        });
    } else {
      console.log("Login form values", values);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          setEmail("");
          setPassword("");
          reset();
          router.push("/student");
        })
        .catch((e) => {
          console.log("catch ", e.message);
          alert("Something went wrong please try again");
        });
    }
  };

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: search == "true" ? 1 : 0,
        display: search == "true" ? "flex" : "none",
        transition: { delay: 0.1 },
      }}
      transition={{ duration: 0.1 }}
      className={`flex bg-[#131f24] text-white top-0 h-svh items-center flex-col p-5 w-full absolute ${
        search != "true" && "hidden"
      }`}
    >
      <div className="flex items-center justify-between w-full ">
        <Button
          isIconOnly
          onClick={() => router.push("/")}
          radius="full"
          variant="light"
          size="md"
          className=" font-black text-[#2c4652] text-xl"
        >
          X
        </Button>
        <MyButton
          color="secondary"
          size="md"
          onClick={() => handlePageChange()}
          className=" rounded-xl border-[#2c4652] text-sky-400"
        >
          {formType === "Login" ? "CREATE AN ACCOUNT" : "LOGIN"}
        </MyButton>
      </div>
      <div className="my-auto w-[20rem] pb-[40px]">
        <p className="text-3xl font-extrabold text-white">
          {formType == "Login" ? "ZALOGUJ SIĘ" : "UTWÓRZ KONTO"}
        </p>
        <div className="relative h-12 mt-10 group">
          <InputForm
            set={setEmail}
            value={email}
            placeholder="Email"
            type="email"
            name="email"
            register={formType === "Login" ? loginRegister : register}
            error={formType === "Login" ? loginErrors.email : errors.email}
            className="h-full"
          />
          <div
            onClick={() => setEmail("")}
            className=" group-hover:block cursor-pointer hidden absolute top-3 text-sm right-3 font-black px-[6px] py-[1px] text-center items-center bg-[#2c4652] rounded-full text-[#131f24]"
          >
            X
          </div>
        </div>
        {formType === "Register" && (
          <div className="relative h-12 mt-5 group">
            <InputForm
              set={setUsername}
              value={username}
              placeholder="Username"
              type="text"
              name="username"
              register={register}
              error={errors.username}
              className="h-full"
            />
            <div
              onClick={() => setUsername("")}
              className=" group-hover:block cursor-pointer hidden absolute top-3 text-sm right-3 font-black px-[6px] py-[1px] text-center items-center bg-[#2c4652] rounded-full text-[#131f24]"
            >
              X
            </div>
          </div>
        )}
        <InputForm
          set={setPassword}
          value={password}
          placeholder="Password"
          type="password"
          name="password"
          register={formType === "Login" ? loginRegister : register}
          error={formType === "Login" ? loginErrors.password : errors.password}
          className="h-12 mt-5"
        />
        {formType === "Register" && (
          <>
          <InputForm
            set={setCnfPassword}
            value={cnfPassword}
            placeholder="Confirm Password"
            type="password"
            name="cnfPassword"
            register={register}
            error={errors.cnfPassword}
            className="h-12 mt-5"
          />
          <select name="role" id='role'  className="h-12 mt-5 w-full font-bold outline-none rounded-2xl text-lg px-2  border-2 focus:border-sky-300/50 bg-sky-300/5">
           <option value="Student" className="text-black">Uczeń</option>
           <option value="Teacher" className="text-black">Nauczyciel</option>
          </select>
          </>
        )}
        <MyButton
          color="active"
          className="w-full mt-5 bg-sky-400 border-sky-600 rounded-2xl"
          onClick={
            formType === "Login"
              ? handleLoginSubmit(submitForm)
              : handleSubmit(submitForm)
          }
        >
          {formType === "Login" ? "ZALOGUJ SIĘ" : "UTWÓRZ KONTO"}
        </MyButton>
        
      </div>
    </motion.div>
  );
}
