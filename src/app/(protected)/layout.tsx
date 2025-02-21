"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuth } from "@clerk/nextjs";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/auth/login"); 
    }
  }, [userId, isLoaded, router]);

  if (!isLoaded) return <div>Loading...</div>;

  return userId ? <DashboardLayout>{children}</DashboardLayout> : null;
}
