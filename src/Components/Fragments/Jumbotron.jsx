import React from "react";

const Jumbotron = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#dae4ff] to-[#b3c7f7] p-8 rounded-lg text-slate-900 flex flex-col md:flex-row items-center justify-between px-20 h-screen my-[50px]">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
          Jalan Pintas Menuju Web Developer Handal, Tanpa Biaya Sepeser Pun.
        </h1>
        <p className="text-lg md:text-xl">
          Pelajari dengan mudah, hasilkan karya profesional.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Akses ribuan tutorial dan contoh kode sekarang juga.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-lg shadow-custom mt-4">
          Gabung bersama kami
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="/jumbotron.png" alt="Jumbotron" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Jumbotron;
