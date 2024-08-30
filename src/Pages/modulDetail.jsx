import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useModulDetail } from "../Hook/HookModulD";
import useModulByMateri from "../Hook/HookModul";
import ModulDetail from "../Components/Fragments/Card/CardModulDetail";
import Sidebar from "../Components/Fragments/SideBar";
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
    console.log("Navigating to next module:", nextModulId);
    const currentIndex = data.modul.findIndex(
      (modul) => modul.uuid === nextModulId
    );

    const nextIndex = currentIndex + 1;

    if (nextIndex >= data.modul.length) {
      return false;
    }

    const result = await handleCheckModul(data.modul[nextIndex].uuid);

    if (result && result.success === 200) {
      return `/materi/${materiId}/${data.modul[nextIndex].uuid}`;
    }
  };

  const handlePrevModule = async (prevModulId) => {
    const arrayModul =
      data.modul.findIndex((modul) => modul.uuid === prevModulId) - 1;
    if (arrayModul >= 0 && arrayModul < data.modul.length) {
      const result = await handleCheckModul(data.modul[arrayModul].uuid);
      if (result && result.success === 200) {
        navigate(`/materi/${materiId}/${data.modul[arrayModul].uuid}`);
      }
    }
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
      data={data}
      materiId={materiId}
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
