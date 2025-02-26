export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="flex items-center justify-center bg-cover bg-center p-[20px]"
        style={{ backgroundImage: "url('/images/onBoardingScreen/gradiantImg.png')" }}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg m-auto">
          {children}
        </div>
      </div>
    );
  }
  