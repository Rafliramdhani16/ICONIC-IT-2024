import LayoutProfile from "../Components/Layouts/LayoutProfile";
import FormProfile from "../Components/Fragments/FormProfile";
import ReportVisitor from "../Context/FetchApi";

const profile = () => {
  return (
    <LayoutProfile pageTitle="Profil Saya">
      <ReportVisitor />
      <FormProfile />
    </LayoutProfile>
  );
};

export default profile;
