import { NextResponse } from "next/server";
import { providers } from "../provider-data";

export async function GET(req: Request, { params }: { params: Promise<{ provider: string }> }) {
  const provider = (await params).provider;
  const providerInfo = providers[provider];
  if (!providerInfo) {
    return NextResponse.json({ error: "Provider not found" }, { status: 404 });
  }

  return NextResponse.json(providerInfo);
}
