"use client";
import { ContinueStep, StartStep, VerificationsStep } from "@/components";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center">
      <SignUp.Root>
        <StartStep />
        <ContinueStep />
        <VerificationsStep />
      </SignUp.Root>
    </div>
  );
}
