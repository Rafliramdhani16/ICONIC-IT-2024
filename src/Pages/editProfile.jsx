import LayoutProfile from "../Components/Layouts/LayoutProfile";
import EditFormProfile from "../Components/Fragments/EditFormProfile";
import ReportVisitor from "../Context/FetchApi";

const EditProfile = () => {
  return (
    <>
      <ReportVisitor />
      <LayoutProfile pageTitle="Edit Profile">
        <EditFormProfile />
      </LayoutProfile>
    </>
  );
};
export default EditProfile;
