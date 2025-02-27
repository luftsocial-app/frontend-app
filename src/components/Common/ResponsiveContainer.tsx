interface ResponsiveContainerProps {
  children: React.ReactNode;
}

export function ResponsiveContainer({
  children,
}: Readonly<ResponsiveContainerProps>) {
  return <div className="w-full xl:w-[90rem]">{children}</div>;
}
