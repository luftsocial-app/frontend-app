"use client";
import { BillingSelector } from "../LandingPage/BillingSelector";
import { SubscriptionItem } from "./SubscriptionItem";
import { useState } from "react";
import { subscriptionData } from "@/fixtures/subscriptionData";

export function Subscription() {
  const [platformCount, setPlatformCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const [freePlan, proPlan, enterprisePlan] = subscriptionData;

  const isPriceYearly = billingCycle === "yearly";
  const proPrice = (isPriceYearly ? 8.99 : 10) * platformCount;
  const enterprisePrice = (isPriceYearly ? 24.99 : 30) * platformCount;

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-[11.81rem] py-16 sm:py-[6.25rem]">
      <div className="text-center">
        <p className="text-primaryBlue font-bold text-lg mb-4">PRICING</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Packages That Don&apos;t Dent
          <br className="hidden sm:block" />
          The Wallet
        </h2>
        <div className="my-[3.75rem]">
          <BillingSelector
            setBillingCycle={setBillingCycle}
            billingCycle={billingCycle}
            platformCount={platformCount}
            setPlatformCount={setPlatformCount}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <SubscriptionItem {...freePlan} />
        <SubscriptionItem {...proPlan} plan={`$${proPrice.toFixed(2)}`} />
        <SubscriptionItem
          {...enterprisePlan}
          plan={`$${enterprisePrice.toFixed(2)}`}
        />
      </div>
    </div>
  );
}
