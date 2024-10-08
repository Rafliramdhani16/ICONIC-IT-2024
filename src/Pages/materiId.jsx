import LayoutHome from "../Components/Layouts/LayoutHome";
import DetailMateri from "../Components/Fragments/DetailMateri";
import CardModul from "../Components/Fragments/Card/CardModul";
import { useParams } from "react-router-dom";
import useModulByMateri from "../Hook/HookModul";
import SkeModul from "../Components/Elements/Skeleton/SkeModul";
import ReportVisitor from "../Context/FetchApi";

const MateriHTML = () => {
  const { materiId } = useParams();
  const { data, loading, error, joined, handleUnlock } =
    useModulByMateri(materiId);

  if (loading)
    return (
      <div>
        <SkeModul />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Tidak ada data tersedia</div>;

  return (
    <LayoutHome>
      <ReportVisitor />
      <div className="mt-24">
        <DetailMateri data={data} joined={joined} onUnlock={handleUnlock} />
        <CardModul data={data} joined={joined} />
      </div>
    </LayoutHome>
  );
};

export default MateriHTML;
