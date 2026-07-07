export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role: "ROLE_ADMIN" | "ROLE_CUSTOMER";
}