// app/dashboard/driver/layout.tsx
import DriverSidebar from "@/components/common/Sidebar/Driver";

export default function DriverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DriverSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
  