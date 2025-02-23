import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "BookMyStay",
  description: "Travel and stay in comfort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Responsive />
        {children}
      </body>
    </html>
  );
}
