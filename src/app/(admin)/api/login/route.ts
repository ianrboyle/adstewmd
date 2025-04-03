import { NextRequest, NextResponse } from "next/server";
import { LoginData } from "../../../../interfaces/admin/sign-in-data";
import { loginUserService } from "../../../../server-utils/login";
import { ApiResponse } from "../../../../models/response.model";
import { cookies } from "next/headers";
const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const payload = formData.get("LoginData") as string | null;

    if (!payload) {
      return NextResponse.json(ApiResponse.failure("LoginData is missing", 400), { status: 400 });
    }

    const loginPayload = JSON.parse(payload) as LoginData;
    const response = await loginUserService(loginPayload);

    const cookieStore = await cookies();
    if (response.data && response.data.jwt) {
      cookieStore.set("jwt", response.data.jwt, config);
    }
    return NextResponse.json(response, { status: response.status });
  } catch (error) {
    return NextResponse.json(ApiResponse.failure("Server error", 500), { status: 500 });
  }
}
