import React from "react";
import RequestReset from "../Fragments/FormReqPassword";
import ResetPassword from "../Fragments/FormResetPassword";

const LayoutReset = ({ isRequest }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-log.svg")' }}
    >
      <div className="flex w-full">
        <div className="flex flex-1 justify-center items-center p-8">
          {isRequest ? <RequestReset /> : <ResetPassword />}
        </div>
        <div className="flex flex-1 flex-col items-start justify-start p-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
              {isRequest
                ? "Lanjutkan Perjalanan Web"
                : "Reset Kata Sandi dan Mulai Lagi"}
            </h1>
            <h1 className="text-4xl font-bold text-white mb-4">
              {isRequest ? "Developermu" : "Developermu"}
            </h1>
            <p className="text-white text-lg mb-10">
              {isRequest
                ? "Masukkan emailmu untuk melanjutkan, dan kami akan mengirimkan instruksi reset kata sandi."
                : "Masukkan kata sandi baru untuk melanjutkan perjalananmu sebagai developer."}
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

export default LayoutReset;
