import React from "react";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { servieRegister } from "../services/AuthService";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmitLogics = async (data: RegisterRequest) => {
    try {
      const response = await servieRegister(data);
      console.log(response);
      alert("Registration Success");
      reset();
    } catch (error: any) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogics)}>

      <input
        type="text"
        placeholder="Enter Name"
        {...register("name")}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        {...register("email")}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password")}
      />

      <br /><br />

      <select {...register("role")}>
        <option value="">Select Role</option>
        <option value="ROLE_ADMIN">Admin</option>
        <option value="ROLE_CUSTOMER">Customer</option>
      </select>

      <br /><br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;