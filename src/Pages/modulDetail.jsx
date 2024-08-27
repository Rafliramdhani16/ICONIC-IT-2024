import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useModulDetail } from "../Hook/HookModulD";
import CardModul from "../Components/Fragments/Card/CardModulDetail";
import Sidebar from "../Components/Fragments/Sidebar";
import CardModulSkeleton from "../Components/Elements/Skeleton/SkeModulD";

const ModulDetail = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const { materiId, modulId } = useParams();
  const { modulDetail, loading, error } = useModulDetail(materiId, modulId);

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
    <CardModul modulDetail={modulDetail}>
      <Sidebar
        open={open}
        toggleSidebar={toggleSidebar}
        modulDetail={modulDetail}
      />
    </CardModul>
  );
};

export default ModulDetail;
