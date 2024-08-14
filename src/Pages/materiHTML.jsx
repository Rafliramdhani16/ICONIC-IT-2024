import DetailMateri from "../Components/Fragments/DetailMateri";
import LayoutHome from "../Components/Layouts/LayoutHome";
import Pembelajaran from "../Components/Fragments/Pembelajaran";

const MateriHTML = () => {
  return (
    <>
      <LayoutHome>
        <div className="mt-24">
          <DetailMateri />
        </div>
        <Pembelajaran />
      </LayoutHome>
    </>
  );
};
export default MateriHTML;
