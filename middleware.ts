import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip if already has locale or is a static file
  if (
    pathname.startsWith('/en') || 
    pathname.startsWith('/pt') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Detect locale from cookie or header
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  let locale = 'en'
  if (localeCookie && (localeCookie === 'pt' || localeCookie === 'en')) {
    locale = localeCookie
  } else if (acceptLanguage.toLowerCase().includes('pt')) {
    locale = 'pt'
  }

  // Redirect to locale path
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)',],
}
