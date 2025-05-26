// app/dashboard/operator/layout.tsx
import Sidebar from "@/components/common/Sidebar";
import OperatorLinks from "@/components/common/Sidebar/OperatorLinks";

export default function OperatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar links={<OperatorLinks />} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
