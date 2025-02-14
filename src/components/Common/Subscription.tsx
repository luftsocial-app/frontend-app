import { Check } from "lucide-react";

const columnData = [
  {
    heading: "Essential Plan",
    plan: "FREE",
    paragraph: "For Solo Creators & Small Businesses",
    features: [
      "Schedule up to 50 posts/month on 3 platforms",
      "AI-powered best time to post suggestions",
      "Basic engagement tracking (likes, comments, shares)",
      "Single-user access",
      "Live Stream for free on 2 platforms",
    ],
    buttonText: "Start Free",
    isPopular: false,
  },
  {
    heading: "Pro Plan",
    plan: "$89.99",
    period: "/ month",
    paragraph: "For Growing Teams & Agencies",
    features: [
      "Unlimited post scheduling on 5 platforms",
      "AI-driven content optimization & hashtag suggestions",
      "Bulk scheduling with drag-and-drop calendar",
      "Team collaboration tools, including post approvals",
      "Competitor tracking and audience insights",
    ],
    buttonText: "Start Pro",
    isPopular: true,
  },
  {
    heading: "Enterprise Plan",
    plan: "$149.99",
    period: "/ month",
    paragraph: "For Large Brands & Enterprises",
    features: [
      "Unlimited scheduling on all major platforms",
      "AI-powered trend forecasting & sentiment analysis",
      "Custom automated workflows for post approvals & engagement",
      "CRM integration for personalized customer interactions",
      "Dedicated account manager & 24/7 priority support",
    ],
    buttonText: "Start Enterprise",
    isPopular: false,
  },
];

export function Subscription() {
  return (
    <div className="mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-primaryBlue font-bold text-lg mb-4">PRICING</p>
        <h2 className="text-4xl font-bold text-gray-900">
          Packages That Don't Dent
          <br />
          The Wallet
        </h2>
      </div>

      <div className="flex gap-8 justify-center">
        {columnData.map((item, index) => (
          <div
            key={index}
            
            className={`relative rounded-[8px] border border-gray-300 w-full min-w-[362px] max-w-[362px] p-8 ${
              item.isPopular ? "bg-primaryBlue" : "bg-secondaryPink"
            }`}
          >
            {item.isPopular && (
              <span className="absolute top-4 right-4 bg-white text-primaryBlack px-3 py-1 rounded-full text-xs  font-semiBold">
                Most Popular
              </span>
            )}

            <div className={"space-y-4"}>
              <h3
                className={`text-xl font-semibold ${
                  item.isPopular ? "text-white" : "text-primaryBlack"
                }`}
              >
                {item.heading}
              </h3>
              <div className="flex items-baseline">
                <span
                  className={`text-3xl font-bold ${
                    item.isPopular ? "text-secondaryGray2" : "text-primaryBlack"
                  }`}
                >
                  {item.plan}
                </span>
                {item.period && (
                  <span
                    className={`text-sm ml-1 ${
                      item.isPopular
                        ? "text-secondaryGray2"
                        : "text-primaryBlack"
                    }`}
                  >
                    {item.period}
                  </span>
                )}
              </div>
              <p
                className={`text-sm font-normal  ${
                  item.isPopular ? "text-white" : "text-secondaryBlack2"
                }`}
              >
                {item.paragraph}
              </p>

              <div className="border-t border-gray-200 my-6"></div>

              <div className="space-y-4">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className={`text-${
                        item.isPopular ? "white" : "primaryBlue"
                      }`}
                    >
                      <Check size={18} />
                    </span>
                    <span
                      className={`text-sm ${
                        item.isPopular
                          ? "text-secondaryGray2"
                          : "text-primaryBlack"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={` mt-8 py-2 px-8 rounded-lg text-base font-semiBold bg-white text-primaryBlue border ${item.isPopular ? 'border-white' : 'border-primaryBlue'}`}
                >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
