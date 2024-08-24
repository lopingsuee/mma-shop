import Image from "next/image";
import React from "react";
import { Archivo, Archivo_Black } from "next/font/google";

// Konfigurasi impor font
const archivo = Archivo({ subsets: ["latin"], weight: "700", display: "swap" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Page1() {
  return (
    <div className=" w-full h-[calc(100vh-64px)]">
      <Image
        src="/mmagif.gif"
        alt="Deskripsi GIF"
        layout="fill"
        objectFit="cover"
        quality={100}
        unoptimized
      />
      <div className="relative flex flex-col h-full items-center justify-center">
        <h1
          className={`${archivoBlack.className} text-white text-4xl md:text-7xl font-bold text-center`}
        >
          <span>GEAR UP,</span>
          <span> FIGHT </span>
          <span className="text-red-600">STRONGER.</span>
        </h1>

        <div className="mt-6 flex lg:gap-10  md: gap-3 ">
          <div>
          <button
            className={`${archivoBlack.className} font-bold text-xl rounded-full  bg-white text-black border border-gray-300 px-4 py-2 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 dark:bg-black dark:text-white dark:border-gray-600`}
          >
            See Product
          </button>
          </div>
          <div>
          <button
            className={`${archivoBlack.className} font-bold text-xl rounded-full bg-white text-black border border-gray-300  px-4 py-2 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 dark:bg-black dark:text-white dark:border-gray-600`}
          >
            Join Now
          </button> 
          </div>
        </div>
      </div>
    </div>
  );
}
