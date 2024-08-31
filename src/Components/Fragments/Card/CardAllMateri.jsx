import React, { useState, useRef } from "react";
import CardSection from "./CardSectionDummy";
import { categories } from "../../../Hook/DummyData";
const CardAllMateri = () => {
  const [activeIndices, setActiveIndices] = useState(categories.map(() => 0));
  const scrollRefs = categories.map(() => useRef(null));

  const scrollLeft = (categoryIndex) => {
    const ref = scrollRefs[categoryIndex];
    const currentIndex = activeIndices[categoryIndex];

    if (ref.current) {
      const newIndex = Math.max(currentIndex - 1, 0);
      setActiveIndices((prev) => {
        const newIndices = [...prev];
        newIndices[categoryIndex] = newIndex;
        return newIndices;
      });
      ref.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (categoryIndex) => {
    const ref = scrollRefs[categoryIndex];
    const currentIndex = activeIndices[categoryIndex];
    const cards = categories[categoryIndex].materials;

    if (ref.current) {
      const newIndex = Math.min(currentIndex + 1, cards.length - 1);
      setActiveIndices((prev) => {
        const newIndices = [...prev];
        newIndices[categoryIndex] = newIndex;
        return newIndices;
      });
      ref.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto my-14 w-[80%]">
      {categories.map((category, index) => (
        <CardSection
          key={category.name}
          title={category.name}
          cards={category.materials}
          scrollRef={scrollRefs[index]}
          activeIndex={activeIndices[index]}
          scrollLeft={() => scrollLeft(index)}
          scrollRight={() => scrollRight(index)}
        />
      ))}
    </div>
  );
};

export default CardAllMateri;
