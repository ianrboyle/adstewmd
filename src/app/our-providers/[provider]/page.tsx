import ProviderPageTemplate from "../../../components/our-providers/ProviderPageTemplate";

export default async function ProviderDetailsPage({ params }: { params: Promise<{ provider: string }> }) {
  const provider = (await params).provider;

  return <ProviderPageTemplate provider={provider} />;
}
