export function ResponsiveContainer({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="w-full xl:w-[90rem]">
        {children}
      </div>
    );
  }
  