import { AdvanceAnalysisIcon } from "@/icons/listingIcons/AdvanceAnalysisIcon";
import { AiPoweredIcon } from "@/icons/listingIcons/AiPoweredIcon";
import { IntegrationIcon } from "@/icons/listingIcons/IntegrationIcon";
import {  ListingIcon } from "@/icons/listingIcons/ListingIcon";
import { SendIcon } from "lucide-react";

export const leftImageData = [
  {
    id: 1,
    heading: "Effortless Publishing",
    subheading:
      "Plan, schedule, and publish content across all your social media platforms from one dashboard.",
    pointers: [
      "Automate your posting schedule for consistent engagement.",
      "Customize content for each platform to maximize reach.",
      "Collaborate with your team and approve posts with ease.",
    ],
    ctaText: "Explore our publishing features",
    ctaUrl: "/",
    imageSrc: "/images/about-us/blog1.png",
    icon: <SendIcon height={20} width={20} />,
  },
  {
    id: 2,
    heading: "AI-Powered Engagement",
    subheading:
      "Enhance audience interaction with smart automation and instant replies.",
    pointers: [
      "Auto-respond to comments and messages with AI-driven replies.",
      "Set up keyword-based triggers to handle FAQs.",
      "Engage your audience in real time without manual effort.",
    ],
    ctaUrl: "/",
    ctaText: "Explore our engagement features",
    imageSrc: "/images/about-us/automaticDashboard.png",
    icon: <AiPoweredIcon height={20} width={20} />,
  },
  {
    id: 3,
    heading: "Advanced Analytics",
    subheading:
      "Track and analyze your social media performance with in-depth insights.",
    pointers: [
      "Monitor audience growth and engagement trends.",
      "IGenerate detailed reports to refine your content strategy.",
      "Compare performance across different platforms with ease.",
    ],
    ctaUrl: "/",
    ctaText: "Explore our analytics features",
    imageSrc: "/images/about-us/advancedAnalytics.png",
    icon: <AdvanceAnalysisIcon height={20} width={20} />,
  },
  {
    id: 4,
    heading: "Social Listening",
    subheading:
      "Stay ahead of trends by monitoring brand mentions and industry conversations.",
    pointers: [
      "Track keywords, hashtags, and brand mentions in real time.",
      "Gain insights into audience sentiment and emerging trends.",
      "Use data-driven insights to optimize your marketing strategies.",
    ],
    ctaUrl: "/",
    ctaText: "Explore our listening features",
    imageSrc: "/images/about-us/socialListing.png",
    icon: <ListingIcon height={20} width={20} />,
  },
  {
    id: 5,
    heading: "Seamless Integrations",
    subheading:
      "Connect with your audience effortlessly by integrating major platforms:",
    pointers: [
      "Link your Facebook, Instagram, and YouTube accounts for smooth content scheduling and interaction.",
      "Manage posts, replies, and insights all in one place.",
      "Track engagement trends and optimize your strategy with data-driven decisions.",
    ],
    ctaUrl: "/",
    ctaText: "Explore our listening features",
    imageSrc: "/images/about-us/seamlessIntegration.png",
    icon: <IntegrationIcon height={20} width={20} />,
  },
];