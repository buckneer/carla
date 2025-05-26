// app/dashboard/driver/layout.tsx
import { AuthProvider } from "@/components/AuthContext";
import DriverSidebar from "@/components/common/Sidebar/Driver";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<div className="flex h-screen">
				<DriverSidebar />
				<main className="flex-1 overflow-auto">{children}</main>
			</div>
		</AuthProvider>
	);
}
