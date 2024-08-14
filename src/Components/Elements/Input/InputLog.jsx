import React, { useState } from "react";
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import LabelInput from "./LabelInput";

const InputLog = ({ fields, handleChange, errors, formData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div>
      {fields.includes("fullname") && (
        <div className="flex justify-between">
          <div className="w-1/2 pr-2">
            <LabelInput
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Nama depan"
              icon={MdPersonOutline}
              onChange={handleChange}
              error={errors.firstname}
              value={formData.firstname}
              autoComplete="off"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <LabelInput
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Nama belakang"
              icon={MdPersonOutline}
              onChange={handleChange}
              error={errors.lastname}
              value={formData.lastname}
              autoComplete="off"
              required
            />
          </div>
        </div>
      )}

      {fields.includes("username") && (
        <LabelInput
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          icon={MdPersonOutline}
          onChange={handleChange}
          error={errors.username}
          value={formData.username}
          autoComplete="off"
          required
        />
      )}

      {fields.includes("email") && (
        <LabelInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          icon={FaRegEnvelope}
          onChange={handleChange}
          error={errors.email}
          value={formData.email}
          required
          autoComplete="off"
        />
      )}

      {fields.includes("password") && (
        <LabelInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          icon={MdLockOutline}
          onChange={handleChange}
          error={errors.password}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          value={formData.password}
          required
          autoComplete="off"
        />
      )}

      {fields.includes("password2") && (
        <LabelInput
          type="password"
          id="password2"
          name="password2"
          placeholder="Konfirmasi password"
          icon={MdLockOutline}
          onChange={handleChange}
          error={errors.password2}
          showPassword={showConfirmPassword}
          togglePasswordVisibility={toggleConfirmPasswordVisibility}
          value={formData.password2}
          required
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default InputLog;