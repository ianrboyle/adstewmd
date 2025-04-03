// "use server";
// import { cookies } from "next/headers";
// import { loginUserService } from "../../server-utils/login";
// import { LoginData } from "../../interfaces/admin/sign-in-data";
// import { ApiResponse } from "../../models/response.model";

// export interface LoginUserState {
//   data: LoginData | null;
//   error?: string;
//   success: boolean;
// }

// const config = {
//   maxAge: 60 * 60 * 24 * 7, // 1 week
//   path: "/",
//   domain: process.env.HOST ?? "localhost",
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
// };

// export async function loginUserAction(prevState: LoginUserState, formData: FormData): Promise<Response> {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   if (typeof email !== "string" || typeof password !== "string") {
//     return {
//       ...prevState,
//       error: "Invalid form data",
//     };
//   }

//   const loginData: LoginData = { email, password };
//   const responseData = await loginUserService(loginData);

//   if (!responseData || responseData.error) {
//     return {
//       ...prevState,
//       error: responseData?.error?.message || "Login failed",
//       success: false,
//     };
//   }

//   const cookieStore = await cookies();
//   cookieStore.set("jwt", responseData.jwt, config);

//   return {
//     data: responseData,
//     success: true,
//     error: undefined,
//   };
// }
