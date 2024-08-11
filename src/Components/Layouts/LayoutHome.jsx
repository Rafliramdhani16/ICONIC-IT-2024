import Jumbotron from "../Fragments/Jumbotron";
import Navbar from "../Fragments/Navbar";
import CardMateri from "../Fragments/Card/CardMateri";
import CardNews from "../Fragments/Card/CardNews";
import CardAbout from "../Fragments/Card/CardAbout";
import Footer from "../Fragments/footer";
const LayoutHome = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardMateri />
      <CardNews />
      <CardAbout />
      <Footer />
    </>
  );
};

export default LayoutHome;
