import LayoutDashboard from "../Components/Layouts/LayoutDashboard";
import DashboardKategori from "../Components/Fragments/DashboardKategori";

const AdminKategori = () => {
  return (
    <>
      <LayoutDashboard pageTitle={"Semua Kategori"}>
        <DashboardKategori />
      </LayoutDashboard>
    </>
  );
};
export default AdminKategori;
