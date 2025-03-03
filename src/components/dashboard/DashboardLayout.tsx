import SidePanel from "./SidePanel";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidePanel />
      <div className="flex-1 max-h-[100vh]">{children}</div>
    </div>
  );
}
