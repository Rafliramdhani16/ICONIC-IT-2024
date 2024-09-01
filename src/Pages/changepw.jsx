import LayoutProfile from "../Components/Layouts/LayoutProfile";
import FormChangePw from "../Components/Fragments/FormChangePw";
import ReportVisitor from "../Context/FetchApi";

const ChangePassword = () => {
  return (
    <>
      <LayoutProfile pageTitle="Ganti Password">
        <ReportVisitor />
        <FormChangePw />
      </LayoutProfile>
    </>
  );
};
export default ChangePassword;
