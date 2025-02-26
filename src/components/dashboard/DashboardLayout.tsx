import SidePanel from "./SidePanel";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen overscroll-none ">
      <SidePanel />

      <div className="flex-1 overflow-scroll max-h-screen">{children}</div>
    </div>
  );
}
