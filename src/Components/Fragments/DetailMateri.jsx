import React from "react";
import { useParams } from "react-router-dom";

const DetailMateri = () => {
  const { id } = useParams();

  // data sementara
  const materiDetails = {
    1: {
      title: "HTML Dasar #1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam odit eveniet sint? Facilis cumque natus suscipit. Neque, harum nam et quaerat rerum laborum temporibus pariatur? Reprehenderit beatae ipsa impedit adipisci quia placeat ipsam eius quisquam doloremque numquam nostrum architecto non illum asperiores corporis, inventore porro expedita, tenetur saepe laborum laudantium fugiat.",
      imagePath: "/materi.png",
    },
    2: {
      title: "Materi HTML Dasar #2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam odit eveniet sint? Facilis cumque natus suscipit. Neque, harum nam et quaerat rerum laborum temporibus pariatur? Reprehenderit beatae ipsa impedit adipisci quia placeat ipsam eius quisquam doloremque numquam nostrum architecto non illum asperiores corporis, inventore porro expedita, tenetur saepe laborum laudantium fugiat.",
      imagePath: "/materi.png",
    },
  };

  const detail = materiDetails[id];

  if (!detail) {
    // Jika materi tidak ditemukan
    return <div>Materi tidak ditemukan.</div>;
  }

  return (
    <>
      {" "}
      <h1 className="text-2xl font-bold mb-4 ml-60">{detail.title}</h1>
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="flex items-start gap-4">
          <div className="w-60 h-60">
            <img
              src={detail.imagePath}
              alt={detail.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="bg-orange-500 rounded-lg shadow-md text-white w-[800px] p-8 ml-4">
            <p className="text-justify text-lg">{detail.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMateri;
