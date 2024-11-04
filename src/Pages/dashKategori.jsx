import LayoutDashboard from "../Components/Layouts/LayoutDashboard";
import DashboardKategori from "../Components/Fragments/DashboardKategori";

const dashKategori = () => {
  return (
    <>
      <LayoutDashboard pageTitle={"Semua Kategori"}>
        <DashboardKategori />
      </LayoutDashboard>
    </>
  );
};
export default dashKategori;
