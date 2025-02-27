type Plan = {
  id: number;
  label: string;
  price: string;
  description?: string;
  icon: string;
  tooltipText: string;
};


export const plans: Plan[] = [
  {
    id: 1,
    label: "Essential Plan",
    price: "Free",
    description: "",
    icon: "/images/dashboard/plan.png",
    tooltipText: "For Solo Creators & Small Businesses",
  },
  {
    id: 2,
    label: "Pro Plan",
    description: "(Most Popular)",
    price: "$8.99/Month",
    icon: "/images/dashboard/plan.png",
    tooltipText: "For growing teams & Agencies",
  },
  {
    id: 3,
    label: "Enterprise Plan",
    price: "$24.99/Month",
    description: "",
    icon: "/images/dashboard/plan.png",
    tooltipText: "For large brands & Enterprises",
  },
];