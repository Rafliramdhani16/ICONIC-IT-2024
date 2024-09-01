import LayoutHome from "../Components/Layouts/LayoutHome";
import CardKategori from "../Components/Fragments/Card/CardKategori";
import CardNews from "../Components/Fragments/Card/CardNews";
import CardAbout from "../Components/Fragments/Card/CardAbout";
import Jumbotron from "../Components/Fragments/Jumbotron";
import { useNavigate } from "react-router-dom";
import ReportVisitor from "../Context/FetchApi";

const Home = () => {
  const navigate = useNavigate();

  const handleDaftar = () => {
    navigate("/masuk");
  };
  return (
    <>
      <ReportVisitor />
      <LayoutHome>
        <Jumbotron
          heading="Jalan Pintas Menuju Web Developer Handal, Tanpa Biaya Sepeser Pun."
          description="Pelajari dengan mudah, hasilkan karya profesional. Akses ribuan tutorial dan contoh kode sekarang juga."
          buttonText="Gabung bersama kami"
          imgSrc="/jumbotron_infologo.svg"
          onButtonClick={handleDaftar}
        />
        <CardKategori />
        <CardNews />
        <CardAbout />
      </LayoutHome>
    </>
  );
};

export default Home;
