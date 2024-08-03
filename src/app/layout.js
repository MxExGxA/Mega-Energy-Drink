import "./globals.css";

export const metadata = {
  title: "MEGA | Energy Drink",
  description:
    "Discover Mega Energy Drink - the ultimate energy boost for your active lifestyle. Explore our powerful formulas including the new Mega X Edition. Unleash your potential with Mega!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.svg" sizes="any" />

      <body>{children}</body>
    </html>
  );
}
