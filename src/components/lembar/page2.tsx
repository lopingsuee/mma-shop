'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { Archivo, Archivo_Black } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS

// Konfigurasi impor font
const archivo = Archivo({ subsets: ["latin"], weight: "700", display: "swap" });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Page2() {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
    <div className="flex-col lg:h-[50vh] flex mt-16 md:flex-row p-4 w-full">
      <div
        data-aos="fade-right"
        className="flex flex-col items-center gap-3 border border-black text-center p-4"
      >
        <Image src={"/medali.png"} alt={"pke gas"} width={70} height={70} />
        <h1 className={`${archivoBlack.className} font-bold text-lg`}>
          Kami Menjaga Kualitas Produk
        </h1>
        <p className={`${archivo.className}`}>
          Kualitas dan originalitas merupakan hal utama bagi kami dalam menjual produk. Dirancang oleh para ahli kebugaran dengan teknologi yang sesuai dengan program latihan & gym anda.
        </p>
        <button
          className={`${archivo.className} border bg-black text-white rounded-xl mt-5 px-4 py-2 hover:bg-slate-300`}
        >
          Rancang Tempat MMA
        </button>
      </div>

      <div
        data-aos="fade-right"
        className="flex flex-col items-center gap-3 border border-black text-center p-4"
      >
        <Image src={"/gedung1.png"} alt={"logo"} width={70} height={70} />
        <h1 className={`${archivoBlack.className} font-bold text-lg`}>
          Tersedia di Beberapa Kota
        </h1>
        <p className={`${archivo.className}`}>
          MMA kami memiliki beberapa toko alat fitness di Jakarta, Bali & Bandung yang dapat anda kunjungi. Toko MMA Shop jual alat fitness secara online, pengiriman ke seluruh kota di Indonesia. Cek Toko Alat Fitness MMA
        </p>
        <button
          className={`${archivo.className} border bg-black text-white rounded-xl mt-5 px-4 py-2 hover:bg-slate-300 dark:text-white dark:bg-black`}
        >
          Cek Toko
        </button>
      </div>

      <div
        data-aos="fade-right"
        className="flex flex-col items-center gap-3 border border-black text-center p-4"
      >
        <Image src={"/dumbbell.png"} alt={"pke gas"} width={70} height={70} />
        <h1 className={`${archivoBlack.className} font-bold text-lg`}>
          Koleksi Kami Terlengkap
        </h1>
        <p className={`${archivo.className}`}>
          Jual alat fitness / gym, berbagai kebutuhan olahraga & bela diri lengkap. Harga alat fitness terbaik di toko kami. Kami juga bisa menjadi supplier alat fitness usaha gym anda dengan kualitas & harga terbaik.
        </p>
        <button
          className={`${archivo.className} border bg-black text-white rounded-xl mt-5 px-4 py-2 hover:bg-slate-300`}
        >
          Lihat Project
        </button>
      </div>
    </div>
  );
}
