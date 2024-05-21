import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";
import { ROLES } from "./lib/constants";

const AUTH_PAGES = ["/login", "/register", "/forgotpassword", "/resetpassword"];

const NOT_CONTROL = ["/business"];

const BUSINESS_PAGES = ["/dashboard"];

const isBusinessPages = (url: string) =>
  BUSINESS_PAGES.some((page) => page.startsWith(url));

const isNotControlPages = (url: string) =>
  NOT_CONTROL.some((page) => page.startsWith(url));

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));

  const isNotControlReq = isNotControlPages(nextUrl.pathname);

  if (isNotControlReq) {
    const headers = new Headers(request.headers);
    if (hasVerifiedToken && hasVerifiedToken?.id)
      headers.set("id", hasVerifiedToken.id);

    return NextResponse.next({
      request: {
        headers,
      },
    });
  }

  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }

    const response = NextResponse.redirect(new URL(`/`, url));
    return response;
  }

  if (
    !hasVerifiedToken ||
    (isBusinessPages(nextUrl.pathname) && hasVerifiedToken.role != ROLES[1])
  ) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    );
    response.cookies.delete("token");

    return response;
  }

  const headers = new Headers(request.headers);
  headers.set("id", hasVerifiedToken.id);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgotpassword",
    "/resetpassword",
    "/dashboard/:path*",
    "/business/:path*",
    "/profile/:path*",
  ],
};
