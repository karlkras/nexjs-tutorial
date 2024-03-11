import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar >
          {children}
        </NavBar>
      </body>
    </html>
  );
}
