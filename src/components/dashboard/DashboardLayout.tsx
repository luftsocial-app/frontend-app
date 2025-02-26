import SidePanel from "./SidePanel";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen overscroll-none ">
      {/* <div className="sticky top-0 h-auto self-start"> */}
      <SidePanel />
      {/* </div> */}

      <div className="flex-1 overflow-scroll max-h-screen">{children}</div>
    </div>
  );
}
