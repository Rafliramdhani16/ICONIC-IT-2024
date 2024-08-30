import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useModulDetail } from "../Hook/HookModulD";
import useModulByMateri from "../Hook/HookModul";
import ModulDetail from "../Components/Fragments/Card/CardModulDetail";
import Sidebar from "../Components/Fragments/Sidebar";
import CardModulSkeleton from "../Components/Elements/Skeleton/SkeModulD";
import { useCheckModul } from "../Hook/HookCheckModul";
const PageModulDetail = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const { materiId, modulId } = useParams();
  const { modulDetail, loading, error } = useModulDetail(materiId, modulId);
  const { data } = useModulByMateri(materiId);
  const { handleCheckModul } = useCheckModul();

  const handleNextModule = async (nextModulId) => {
    // Implementasi navigasi ke modul berikutnya
    console.log("Navigating to next module:", nextModulId);
    // Misalnya, Anda bisa menggunakan useNavigate di sini untuk berpindah ke modul berikutnya
    const arrayModul =
      data.modul.findIndex((modul) => modul.uuid === modulId) + 1;
    navigate(`/materi/${materiId}/${data.modul[arrayModul].uuid}`);
    const result = await handleCheckModul(data.modul[arrayModul].uuid);
  };

  const handlePrevModule = async (prevModulId) => {
    // Implementasi navigasi ke modul berikutnya
    console.log("Navigating to next module:", prevModulId);
    // Misalnya, Anda bisa menggunakan useNavigate di sini untuk berpindah ke modul berikutnya
    const arrayModul =
      data.modul.findIndex((modul) => modul.uuid === modulId) - 1;
    navigate(`/materi/${materiId}/${data.modul[arrayModul].uuid}`);
    const result = await handleCheckModul(data.modul[arrayModul].uuid);
  };

  if (loading) {
    return (
      <div>
        <CardModulSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Terjadi kesalahan: {error}</div>
    );
  }

  if (!modulDetail) {
    return <div className="text-center">Data tidak tersedia</div>;
  }

  return (
    <ModulDetail
      modulDetail={modulDetail}
      open={open}
      onNextModule={handleNextModule}
      onPrevModule={handlePrevModule}
    >
      <Sidebar open={open} toggleSidebar={toggleSidebar} materiId={materiId} />
    </ModulDetail>
  );
};

export default PageModulDetail;
