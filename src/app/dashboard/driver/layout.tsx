// app/dashboard/driver/layout.tsx
import Sidebar from "@/components/common/Sidebar";
import DriverLinks from "@/components/common/Sidebar/DriverLinks";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<Sidebar links={<DriverLinks />} />
			<main className="flex-1 overflow-auto">{children}</main>
		</div>
	);
}
