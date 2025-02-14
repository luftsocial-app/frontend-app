import { Cards } from "@/components";
import NewsLetter from "@/components/BlogScreen/NewsLetter";
import { Header } from "@/components/Common/Header";

export default function Pricing() {
  return (
    <div>
      <Header imageHeight={170} />
      <NewsLetter />
      <Cards />
    </div>
  );
}
