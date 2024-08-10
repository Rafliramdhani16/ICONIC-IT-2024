import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex text-center flex-col justify-center items-center h-screen">
      <div className="text-3xl font-bold my-4">
        <img src="/not_found.png" alt="404" className="w-1/2 mx-auto" />
        404 || Halaman tidak ditemukan
      </div>
    </div>
  );
};

export default ErrorPage;
