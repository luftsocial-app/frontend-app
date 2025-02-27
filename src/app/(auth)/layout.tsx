export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center min-h-screen justify-center overflow-scroll bg-cover bg-center p-[20px] h-screen"
      style={{
        backgroundImage: "url('/images/onBoardingScreen/gradiantImg.png')",
      }}
    >
      <div className="w-full max-w-md rounded-lg m-auto">{children}</div>
    </div>
  );
}
