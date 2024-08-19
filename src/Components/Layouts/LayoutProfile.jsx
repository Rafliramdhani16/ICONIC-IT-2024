import SideBarProfile from "../Fragments/SideBarProfile";
import Navbar from "../Fragments/Navbar";

const LayoutProfile = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="flex min-h-full">
        <SideBarProfile />
        <div className="flex-grow p-8">{children}</div>
      </div>
    </>
  );
};
export default LayoutProfile;
