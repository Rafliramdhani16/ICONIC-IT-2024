import LayoutProfile from "../Components/Layouts/LayoutProfile";
import FormSerti from "../Components/Fragments/FormSerti";
import ReportVisitor from "../Context/FetchApi";

const Sertifikat = () => {
  return (
    <>
      <LayoutProfile pageTitle="Daftar E-Sertifikat">
        <ReportVisitor />
        <FormSerti />
      </LayoutProfile>
    </>
  );
};
export default Sertifikat;
