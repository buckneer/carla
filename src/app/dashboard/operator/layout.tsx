// app/dashboard/operator/layout.tsx
import OperatorSidebar from "@/components/common/Sidebar/Operator";

export default function OperatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <OperatorSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
