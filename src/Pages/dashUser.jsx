import LayoutDashboard from "../Components/Layouts/LayoutDashboard";
import DashboardUser from "../Components/Fragments/DashaboardUser";

const DashboardAllUser = () => {
  return (
    <>
      <LayoutDashboard pageTitle={"Semua Pengguna"}>
        <DashboardUser />
      </LayoutDashboard>
    </>
  );
};
export default DashboardAllUser;
