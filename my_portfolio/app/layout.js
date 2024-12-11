import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atharva Sawant",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen bg-black [radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
