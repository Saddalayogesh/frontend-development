import type { RegisterRequest } from "../interfaces/RegisterRequest";
import axiosInstance from "./AxoisConfig";

export const registerUser = (data: RegisterRequest) => {
    return axiosInstance.post("/auth/signup", data);
};