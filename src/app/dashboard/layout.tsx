// app/dashboard/layout.tsx
import { Inter } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dashboard",
	description: "Secure area for users",
};

export default function DashboardRootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-50`}>
				{children}
			</body>
		</html>
	);
}
