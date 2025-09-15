// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { jwtVerify } from 'jose';

// const JWT_SECRET = new TextEncoder().encode(process.env.ENC_MAIN);

// // List of protected routes
// const protectedRoutes = [
//   '/company-profile',
//   '/for-you',
//   '/friends',
//   '/inbox',
//   '/offical-website',
//   '/packages',
//   '/platform-rules',
//   '/tutorials',
//   '/home',
//   '/invite',
//   '/member-point',
//   '/my-team',
//   '/profile',
//   '/recharge',
//   '/record',  
//   '/set-funds-password',
//   '/social-media',
//   '/task',
//   '/team',
//   '/transfer',
//   '/unreleased',
//   '/verify-funds-password',
//   '/wallet',
//   '/withdraw'
// ];
// const publicRoutes = ['/login', '/forget-password', '/join', '/terms'];

// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get('authToken')?.value;

//   console.log('Token:', token);  // Debugging

//   // Handle protected routes
//   if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
//     if (!token) {
//       console.log('No token found, redirecting to signin');
//       return NextResponse.redirect(new URL('/login', req.url));
//     }

//     try {
//       await jwtVerify(token, JWT_SECRET);
//       console.log('Token valid, proceeding');
//       return NextResponse.next();
//     } catch (err) {
//       console.log('Token invalid, redirecting to signin:', err);
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   // Handle public routes (signin/signup) when user is already logged in
//   if (publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
//     if (token) {
//       try {
//         await jwtVerify(token, JWT_SECRET);
//         console.log('User already logged in, redirecting to home');
//         return NextResponse.redirect(new URL('/home', req.url));
//       } catch (err) {
//         console.log('Token invalid on public route, allowing access:', err);
//         // If token is invalid, allow access to the signin/signup page
//         return NextResponse.next();
//       }
//     }
//   }

//   // Default behavior: Proceed as usual
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };
 




import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.ENC_MAIN)

// List of protected routes - only authenticated users can access
const protectedRoutes = [
  '/company-profile',
  '/for-you',
  '/friends',
  '/inbox',
  '/offical-website',
  '/packages',
  '/platform-rules',
  '/tutorials',
  '/home',
  '/invite',
  '/member-point',
  '/my-team',
  '/profile',
  '/recharge',
  '/record',  
  '/set-funds-password',
  '/social-media',
  '/task',
  '/team',
  '/transfer',
  '/unreleased',
  '/verify-funds-password',
  '/wallet',
  '/withdraw'
]

// List of public routes - only unauthenticated users can access
// const publicRoutes = ["/login", "/signup", "/forget-password"]
const publicRoutes = ['/user/login', '/forget-password', '/user/reg', '/terms'];

// List of independent routes - both authenticated and unauthenticated users can access
const independentRoutes = ["/my/download", "/my/lang", "/terms", "/live-chat"]

/**
 * Checks if the given path matches any route in the provided routes array
 */
function isRouteMatch(path: string, routes: string[]): boolean {
  return routes.some((route) => {
    // Exact match
    if (path === route) return true
    // Path starts with route and next character is / or end of string
    if (path.startsWith(route) && (path.length === route.length || path[route.length] === "/")) return true
    return false
  })
}

/**
 * Checks if the path is an independent route
 */
function isIndependentRoute(path: string): boolean {
  return isRouteMatch(path, independentRoutes)
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = req.cookies.get("authToken")?.value

  console.log(`Processing path: ${path}`)

  // First check if it's an independent route - these are accessible to everyone
  if (isIndependentRoute(path)) {
    console.log(`Independent route detected: ${path}`)
    return NextResponse.next()
  }

  // Check if it's a protected route
  if (isRouteMatch(path, protectedRoutes)) {
    console.log(`Protected route detected: ${path}`)

    if (!token) {
      console.log("No token found, redirecting to login")
      return NextResponse.redirect(new URL("/user/login", req.url))
    }

    try {
      await jwtVerify(token, JWT_SECRET)
      console.log("Token valid, proceeding to protected route")
      return NextResponse.next()
    } catch (err) {
      console.log("Token invalid, redirecting to login")
      return NextResponse.redirect(new URL("/user/login", req.url))
    }
  }

  // Check if it's a public route
  if (isRouteMatch(path, publicRoutes)) {
    console.log(`Public route detected: ${path}`)

    if (token) {
      try {
        await jwtVerify(token, JWT_SECRET)
        console.log("User already logged in, redirecting to home")
        return NextResponse.redirect(new URL("/home", req.url))
      } catch (err) {
        console.log("Token invalid on public route, allowing access")
        // If token is invalid, allow access to the public page
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  // Default behavior for unspecified routes
  console.log(`Unspecified route: ${path}, proceeding normally`)
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all routes that we're interested in
    ...protectedRoutes.map((route) => `${route}/:path*`),
    ...publicRoutes.map((route) => `${route}/:path*`),
    ...independentRoutes.map((route) => route),
  ],
}
