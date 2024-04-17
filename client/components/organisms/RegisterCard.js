import { Arrow } from "../atoms/Arrow";
import { Button } from "../atoms/Button";
import { LogoWithName } from "../atoms/LogoWithName";
import { RegisterForm } from "../molecules/RegisterForm";
import { PasswordForm } from "../molecules/PasswordForm";
import { useState } from "react";
import { createUser } from "@/app/api/users";

export const RegisterCard = () => {
  const [form, setForm] = useState("register");
  const [userData, setUserData] = useState({ username: "", email: "" });

  const handleRegisterSubmit = (data) => {
    setUserData(data);
    setForm("password");
  };

  const handlePasswordSubmit = async (password) => {
    try {
      const result = await createUser(userData.username, userData.email, password);
    } catch (error) {
      console.error("Error completo al registrar el usuario:", error);    }
  };

  return (
    <div className="bg-[#264BEB] text-white rounded-xl p-8 flex flex-col items-start justify-center w-full m-auto gap-8">
      <LogoWithName className="filter-white" />
      <Button href="/login">
        <div className="flex gap-2 items-center justify-center">
          <Arrow />
        </div>
      </Button>
      {form === "register" ? (
        <RegisterForm onSubmit={handleRegisterSubmit} />
      ) : (
        <PasswordForm onSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
};
