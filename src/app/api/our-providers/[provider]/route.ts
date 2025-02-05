import { NextResponse } from "next/server";
import { providers } from "../provider-data"; // Import provider data

export async function GET(req: Request, { params }: { params: { provider: string } }) {
  const providerInfo = providers[(await params).provider];

  if (!providerInfo) {
    return NextResponse.json({ error: "Provider not found" }, { status: 404 });
  }

  return NextResponse.json(providerInfo);
}
