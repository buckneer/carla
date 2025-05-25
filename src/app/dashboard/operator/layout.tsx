import React from "react";
import Driver from "@/components/common/Sidebar/Driver";
import { Inter } from "next/font/google";
import "../../globals.css"; // make sure global styles are still loaded
import Operator from "@/components/common/Sidebar/Operator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard area",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex h-screen">
          <Operator />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
