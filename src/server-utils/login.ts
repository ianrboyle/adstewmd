import { LoginData } from "../interfaces/admin/sign-in-data";
import { LoggedInData } from "../models/logged-in-data.model";
import { ApiResponse } from "../models/response.model";
export async function loginUserService(loginData: LoginData): Promise<ApiResponse<LoggedInData>> {
  try {
    const result = await fetch(`${process.env.ADMIN_API_URL!}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (result.status !== 201) {
      const errorMessage = await result.text();
      return ApiResponse.failure<LoggedInData>(`Login failed: ${errorMessage}`, result.status);
    }

    const data = await result.json();
    return ApiResponse.success<LoggedInData>(data, result.status);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return ApiResponse.failure<LoggedInData>(e.message, 500);
    }
    return ApiResponse.failure<LoggedInData>("Unexpected error occurred", 500);
  }
}
