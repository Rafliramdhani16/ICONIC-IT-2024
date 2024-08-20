import React, { useEffect } from "react";
import { getUserData } from "../../Services/AuthLog";
import useForm from "../../Hook/HookProfile";
import { useNavigate } from "react-router-dom";

const FormProfile = () => {
  const navigate = useNavigate();
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
    <div className="p-6 bg-white rounded-lg shadow-md mt-24 h-[75dvh] w-[80%] border border-neutral-300 mx-auto">
      <div className="flex flex-col items-center mb-6 mt-20">
        <img
          src={formData.image || "./materi.png"}
          alt="User"
          className="w-52 h-52 rounded-2xl border border-neutral-500 mx-auto"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">
          Username :
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          readOnly
          className="w-full p-2 pl-3 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">
          Nama Lengkap :
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          readOnly
          className="w-full p-2 pl-3 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full p-2 pl-3 border rounded-lg bg-gray-100"
        />
      </div>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default FormProfile;
