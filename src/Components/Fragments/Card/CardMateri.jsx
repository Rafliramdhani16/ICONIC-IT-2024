import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMateriByKategori from "../../../Hook/HookMateriDL";
import SkeletonCardMateri from "../../Elements/Skeleton/SkeCardMatei";
import CardSection from "./CardSection";

const CardMateri = ({ kategoriId }) => {
  const { data, loading, error } = useMateriByKategori(kategoriId);
  const scrollRefDasar = useRef(null);
  const scrollRefLanjutan = useRef(null);
  const [activeIndexDasar, setActiveIndexDasar] = useState(0);
  const [activeIndexLanjutan, setActiveIndexLanjutan] = useState(0);
  const navigate = useNavigate();

  const scrollLeft = (type) => {
    const ref = type === "Dasar" ? scrollRefDasar : scrollRefLanjutan;
    const setIndex =
      type === "Dasar" ? setActiveIndexDasar : setActiveIndexLanjutan;
    const currentIndex =
      type === "Dasar" ? activeIndexDasar : activeIndexLanjutan;

    if (ref.current) {
      const newIndex = Math.max(currentIndex - 1, 0);
      setIndex(newIndex);
      ref.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (type) => {
    const ref = type === "Dasar" ? scrollRefDasar : scrollRefLanjutan;
    const setIndex =
      type === "Dasar" ? setActiveIndexDasar : setActiveIndexLanjutan;
    const currentIndex =
      type === "Dasar" ? activeIndexDasar : activeIndexLanjutan;
    const cards = type === "Dasar" ? dasarCards : lanjutanCards;

    if (ref.current) {
      const newIndex = Math.min(currentIndex + 1, cards.length - 1);
      setIndex(newIndex);
      ref.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (card) => {
    navigate(`/materi/${card.uuid}`);
  };

  if (loading) return <SkeletonCardMateri />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Tidak ada data tersedia</div>;

  const { kategori, materi } = data;
  const dasarCards = materi.filter((card) => !card.lanjutan);
  const lanjutanCards = materi.filter((card) => card.lanjutan);

  return (
    <div className="container mx-auto my-14 w-[80%]">
      <CardSection
        title={`${kategori} Dasar`}
        cards={dasarCards}
        scrollRef={scrollRefDasar}
        activeIndex={activeIndexDasar}
        scrollLeft={() => scrollLeft("Dasar")}
        scrollRight={() => scrollRight("Dasar")}
        handleCardClick={handleCardClick}
      />
      <CardSection
        title={`${kategori} Lanjutan`}
        cards={lanjutanCards}
        scrollRef={scrollRefLanjutan}
        activeIndex={activeIndexLanjutan}
        scrollLeft={() => scrollLeft("Lanjutan")}
        scrollRight={() => scrollRight("Lanjutan")}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default CardMateri;
