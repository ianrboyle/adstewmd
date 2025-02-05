import ProviderPageTemplate from "../../../components/our-providers/ProviderPageTemplate";

async function getProviderInfo(provider: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/our-providers/${provider}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}
export default async function ProviderDetailsPage({ params }: { params: Promise<{ provider: string }> }) {
  const provider = (await params).provider;

  const providerInfo = await getProviderInfo(provider);

  return <ProviderPageTemplate providerInfo={providerInfo} />;
}
