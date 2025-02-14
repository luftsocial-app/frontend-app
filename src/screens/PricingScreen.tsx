import { FooterWithCTA } from "@/components";
import { Header } from "@/components/Common/Header";
import {Subscription} from "@/components/Common/Subscription";

export default function Pricing() {
  return (
    <div>
      <Header imageHeight={170} />
      <Subscription />
      <FooterWithCTA/>

    </div>
  );
}
