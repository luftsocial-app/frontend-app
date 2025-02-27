import { SubscriptionItemProps } from "@/components/Common/SubscriptionItem";

export const subscriptionData: SubscriptionItemProps[] = [
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
