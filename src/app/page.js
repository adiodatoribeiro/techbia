"use client"
import { maskPhoneNumber } from "@/utils/masks";
import { validateEmail, validatePhoneNumber } from "@/utils/validations";
import { Eye } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");

  function onBlurEmail(event) {
    const email = event.target.value;

    if(validateEmail(email)){
      setErrorMessage("");
    } else {
      setErrorMessage("*Email inválido, por favor insira um email válido.");
    }
  }

  function onBlurPhoneNumber(event) {
    const phoneNumber = event.target.value;

    if(validatePhoneNumber(phoneNumber)){
      event.target.value = maskPhoneNumber(phoneNumber)

      setErrorMessage("");
    } else {
      setErrorMessage("*Número de telefone inválido, por favor insira um número de telefone válido.");
    }
  }


  return (
    <main className="flex min-h-screen flex-col 
    items-center justify-center p-24 max-h-screen">
      <Image
        src="/assets/woman.jpeg"
        alt="logo"
        width={1400}
        height={1400}
        style={{
          position: "absolute",
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-indigo-800 opacity-70" />

      <div className="flex min-w-full min-h-screen z-10 py-10">
        <div className="flex-[1.5]">
          <h1 className="text-white font-black text-3xl">Techbia</h1>
        </div>
        <div className="flex-1 flex justify-center items-center py-6 px-12">
          <div className="bg-white rounded-3xl min-w-full min-h-full flex justify-center items-start flex-col p-8 text-black gap-4">
            <h1 className="text-3xl font-bold text-indigo-800">Let&apos;s create account.</h1>
            <p>Get started by creating your account</p>
            <div className="flex gap-5 min-w-full">
              <input className="border-none focus:outline-none bg-opacity-5 bg-black rounded-xl placeholder-gray-400 p-4 flex-1" placeholder="First Name" />
              <input className="border-none focus:outline-none bg-opacity-5 bg-black rounded-xl placeholder-gray-400 p-4 flex-1" placeholder="Second Name" />
            </div>
            <input onBlur={onBlurEmail} className="border-none focus:outline-none bg-opacity-5 bg-black rounded-xl placeholder-gray-400 p-4 min-w-full" placeholder="Email" />
            <div className="h-16 w-full bg-[#f2f2f2] rounded-xl flex items-center px-4 gap-4">
              <Image src="/assets/usaflag.png" alt="arrow" width={35} height={35} />
              <p>+ 1</p>
              <div className="w-[1px] h-[80%] bg-gray-400 rounded" />
              <input onBlur={onBlurPhoneNumber} className="flex-grow bg-transparent focus:outline-none" placeholder="Number" />
            </div>

            <div className="flex gap-5 max-w-full">
              <div className="h-16 w-full bg-[#f2f2f2] rounded-xl flex items-center px-4 gap-4">
                <input className="flex-grow bg-transparent focus:outline-none" placeholder="Password" />
                <Eye color="#9da3af" size={32} />
              </div>
              <div className="h-16 w-full bg-[#f2f2f2] rounded-xl flex items-center px-4 gap-4">
                <input className="flex-grow bg-transparent focus:outline-none" placeholder="Confirm Password" />
                <Eye color="#9da3af" size={32} />
              </div>
            </div>

            <div className="text-red-600">
              {errorMessage}
            </div>

            <div className="flex items-start px-4">
              <span>
                <input type="checkbox" className="mr-2 h-5 w-5 accent-[#836ef1]" />
              </span>
              <p>By checking this box you are agreeing with our Terms and Conditions and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
