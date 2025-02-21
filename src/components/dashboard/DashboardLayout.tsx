import SidePanel from './SidePanel';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidePanel />
      {/* <main className="flex-1 p-8">{children}</main> */}
    </div>
  );
}
