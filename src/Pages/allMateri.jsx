import CardAllMateri from "../Components/Fragments/Card/CardAllMateri";
import LayoutHome from "../Components/Layouts/LayoutHome";
import Jumbotron from "../Components/Fragments/Jumbotron";
import ReportVisitor from "../Context/FetchApi";

const AllMateri = () => {
  return (
    <>
      <ReportVisitor />
      <LayoutHome>
        <Jumbotron
          heading="Jalan Pintas Menuju Web Developer Handal, Tanpa Biaya Sepeser Pun."
          description="Pelajari dengan mudah, hasilkan karya profesional. Akses ribuan tutorial dan contoh kode sekarang juga."
          buttonText="Gabung bersama kami"
          imgSrc="/belajar.svg"
          imgWidth="w-[100%]"
          imgHeight="h-[500px]"
        />
        <CardAllMateri />
      </LayoutHome>
    </>
  );
};

export default AllMateri;
