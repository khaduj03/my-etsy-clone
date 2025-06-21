import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "My Etsy Clone",
  description: "Create and delete products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
