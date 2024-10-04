import LayoutDashboard from "../Components/Layouts/LayoutDashboard";
import DashboardMateri from "../Components/Fragments/DashboardMateri";

const DashboardAllMateri = () => {
  return (
    <>
      <LayoutDashboard pageTitle={"Semua Pengguna"}>
        <DashboardMateri />
      </LayoutDashboard>
    </>
  );
};
export default DashboardAllMateri;
