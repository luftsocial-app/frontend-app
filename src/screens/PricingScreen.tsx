import { FooterWithCTA, ResponsiveContainer } from "@/components";
import { Header } from "@/components/Common/Header";
import { Subscription } from "@/components/Common/Subscription";

export function PricingScreen() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveContainer>
        <div className="">
          <Header className="h-[10.625rem]" />
          <Subscription />
          <FooterWithCTA />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
