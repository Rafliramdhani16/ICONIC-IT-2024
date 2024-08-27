import DetailMateri from "../Components/Fragments/DetailMateri";
import LayoutHome from "../Components/Layouts/LayoutHome";
import CardModul from "../Components/Fragments/Card/CardModul";

const MateriHTML = () => {
  return (
    <>
      <LayoutHome>
        <div className="mt-24">
          <DetailMateri />
        </div>
        <CardModul />
      </LayoutHome>
    </>
  );
};
export default MateriHTML;
