export function ResponsiveContainer({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return <div className={`w-full xl:max-w-[80rem] ${className}`}>{children}</div>;
  }
  