import { FooterWithCTA, ResponsiveContainer } from "@/components";
import { Header } from "@/components/Common/Header";
import { Subscription } from "@/components/Common/Subscription";

export function PricingScreen() {
  return (
    <div>
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
