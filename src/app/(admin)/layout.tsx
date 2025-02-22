import ThemeRegistry from "../providers/ThemeRegistry/ThemeRegistry";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeRegistry>{children}</ThemeRegistry>;
}
