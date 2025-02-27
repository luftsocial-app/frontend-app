import { Check } from "lucide-react";

export interface SubscriptionItemProps {
  heading: string;
  plan: string;
  paragraph: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  period?: any;
}

export function SubscriptionItem({
  heading,
  plan,
  paragraph,
  features,
  isPopular,
  buttonText,
  period,
}: Readonly<SubscriptionItemProps>) {
  return (
    <div
      className={`relative rounded-[8px] border border-gray-300 w-full max-w-[22.625rem] mx-auto p-6 sm:p-8 ${
        isPopular ? "bg-primaryBlue" : "bg-secondaryPink"
      }`}
    >
      {isPopular && (
        <span className="absolute top-4 right-4 bg-white text-primaryBlack px-3 py-1 rounded-full text-xs font-semiBold">
          Most Popular
        </span>
      )}

      <div className="space-y-4">
        <h3
          className={`text-xl font-semibold ${
            isPopular ? "text-white" : "text-primaryBlack"
          }`}
        >
          {heading}
        </h3>
        <div className="flex items-baseline">
          <span
            className={`text-3xl font-bold ${
              isPopular ? "text-secondaryGray2" : "text-primaryBlack"
            }`}
          >
            {plan}
          </span>
          {period && (
            <span
              className={`text-sm ml-1 ${
                isPopular ? "text-secondaryGray2" : "text-primaryBlack"
              }`}
            >
              {period}
            </span>
          )}
        </div>
        <p
          className={`text-sm font-normal ${
            isPopular ? "text-white" : "text-secondaryBlack2"
          }`}
        >
          {paragraph}
        </p>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="space-y-4">
          {features.map((feature, id) => (
            <div key={id} className="flex items-start gap-3">
              <span className={`text-${isPopular ? "white" : "primaryBlue"}`}>
                <Check size={18} />
              </span>
              <span
                className={`text-sm ${
                  isPopular ? "text-secondaryGray2" : "text-primaryBlack"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        <button
          className={`mt-8 py-3 w-full sm:w-auto px-8 rounded-lg text-base font-semibold bg-white text-primaryBlue border ${
            isPopular ? "border-white" : "border-primaryBlue"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
