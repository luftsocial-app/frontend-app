import { FooterWithCTA, ResponsiveContainer } from "@/components";
import { Header } from "@/components/Common/Header";
import { Subscription } from "@/components/Common/Subscription";
import SocialMedia from "@/components/LandingPage/SocialMedia";

export function PricingScreen() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveContainer>
        <Header className="h-[10.625rem]" />
        <Subscription />
        <SocialMedia />
          <FooterWithCTA />
      </ResponsiveContainer>
    </div>
  );
}
