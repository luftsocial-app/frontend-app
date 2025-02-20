import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isAuthRoute = createRouteMatcher(['/auth/login', '/auth/signup'])

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth()
  const userId = authData?.userId
  const { pathname } = req.nextUrl
  if (userId && isAuthRoute(req)) {
    return Response.redirect(new URL('/dashboard', req.url))
  }


  if (!userId && pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/auth/login', req.url))
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
