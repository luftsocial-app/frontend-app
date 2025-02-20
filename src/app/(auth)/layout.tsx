export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/onBoardingScreen/gradiantImg.png')" }}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg m-auto">
          {children}
        </div>
      </div>
    );
  }
  