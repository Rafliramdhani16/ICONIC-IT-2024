import React, { useEffect } from "react";
import { getUserData } from "../../Services/AuthLog";
import useForm from "../../Hook/HookProfile";

const FormProfile = () => {
  const { formData, setFormData } = useForm(
    {
      username: "",
      fullname: "",
      email: "",
      image: "",
    },
    () => {},
    "/profile/edit",
    false
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
        if (response.success === 200) {
          setFormData({
            username: response.data.username,
            fullname: `${response.data.firstname} ${response.data.lastname}`,
            email: response.data.email,
            image: response.data.image,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [setFormData]);

  return (
    <div className="h-full w-full">
      <div className="p-6 bg-white w-full h-full flex justify-center items-center ">
        {" "}
        {/* Removed border and shadow */}
        <div className="block md:flex justify-between items-center w-full ">
          <div className="w-full flex justify-center h-full ">
            <img
              src={formData.image}
              alt="User"
              className="w-56 h-56 md:w-96 md:h-96 rounded-3xl object-cover"
            />
          </div>
          <div className="w-full space-y-4 justify-center text-center md:text-start mt-4 h-full ">
            <h1 className="text-lg  md:text-2xl font-semibold tracking-widest">
              Selamat datang,
            </h1>
            <h2 className="text-2xl md:text-3xl text-black uppercase font-bold tracking-widest">
              {formData.fullname}{" "}
              <span className="text-base md:text-lg font-normal lowercase">
                ({formData.username})
              </span>
            </h2>

            <h2 className="text-md md:text-xl text-black lowercase tracking-widest">
              {formData.email}{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProfile;
