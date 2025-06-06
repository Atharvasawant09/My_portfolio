import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atharva Sawant - Full Stack Developer & AI Enthusiast",
  description: "Portfolio website showcasing modern web development projects, AI/ML solutions, and full-stack development expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
          <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(120,119,198,0.15),transparent)] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_400px_at_80%_400px,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
