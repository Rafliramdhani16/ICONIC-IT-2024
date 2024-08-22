import React from "react";
import FormLog from "../Fragments/FormLog";
import FormRegister from "../Fragments/FormRegister";

const LayoutLog = ({ isLogin }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-log.svg")' }}
    >
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-1 justify-center items-center p-8">
          {isLogin ? <FormLog /> : <FormRegister />}
        </div>
        <div className="hidden lg:flex flex-1 flex-col items-start justify-start p-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
              {isLogin
                ? "Lanjutkan Perjalanan Web"
                : "Daftar dan Mulai Perjalanan"}
            </h1>
            <h1 className="text-4xl font-bold text-white mb-4">
              {isLogin ? "Developermu" : "Developermu"}
            </h1>
            <p className="text-white text-lg mb-10">
              {isLogin
                ? "Masuk untuk melanjutkan, tingkatan skill, dan capai tujuan dalam pengembangan web"
                : "Buat akun baru untuk memulai perjalananmu sebagai developer"}
            </p>
            <img
              src="/log.png"
              alt="Logo"
              className="w-[70%] items-center justify-center mx-auto ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLog;
