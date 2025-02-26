import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAuthRoute = createRouteMatcher([
  "/login",
  "/signup",
  "/forgot-password",
]);
const isProtectedRoute = createRouteMatcher(["/dashboard", "/onboarding"]);

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth();
  const userId = authData?.userId;
  const { pathname } = req.nextUrl;
  if (userId && isAuthRoute(req)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
