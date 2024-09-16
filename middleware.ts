import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/contests", "/magazines", "/organizers"];
const authRoutes = ["/auth/register", "/auth/sign-in"];
export default async function middleware(request: NextRequest) {
  const session = await auth();
  // console.log(session, "session from middleware");
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );
  const isAuth = authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );
  if (session && isAuth) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (!session && isProtected) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
