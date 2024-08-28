import React from "react";
import { useParams } from "react-router-dom";
import LayoutHome from "../Components/Layouts/LayoutHome";
import Jumbotron from "../Components/Fragments/Jumbotron";
import CardMateri from "../Components/Fragments/Card/CardMateri";

const KategoriHTML = () => {
  const { id } = useParams();

  return (
    <LayoutHome>
      <Jumbotron
        heading="Jalan Pintas Menuju Web Developer Handal, Tanpa Biaya Sepeser Pun."
        description="Pelajari dengan mudah, hasilkan karya profesional. Akses ribuan tutorial dan contoh kode sekarang juga."
        buttonText="Gabung bersama kami"
        imgSrc="/jum_kategori.png"
        imgWidth="w-[55%]"
        imgHeight="h-[400px]"
      />
      <CardMateri kategoriId={id} />
    </LayoutHome>
  );
};

export default KategoriHTML;
