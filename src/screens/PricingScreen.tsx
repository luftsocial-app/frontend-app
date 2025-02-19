import { FooterWithCTA } from "@/components";
import { Header } from "@/components/Common/Header";
import {Subscription} from "@/components/Common/Subscription";

export default function Pricing() {
  return (
    <div>
      <Header className="h-[10.625rem]" />
      <Subscription />
      <FooterWithCTA/>

    </div>
  );
}
