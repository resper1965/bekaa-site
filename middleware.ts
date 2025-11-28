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

  // Detect locale from cookie, header, or default to 'en'
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  let locale = 'en'
  
  // Priority: cookie > accept-language header > default
  if (localeCookie && (localeCookie === 'pt' || localeCookie === 'en')) {
    locale = localeCookie
  } else if (acceptLanguage) {
    // Check for Portuguese in accept-language (pt, pt-BR, pt-PT, etc.)
    const langLower = acceptLanguage.toLowerCase()
    if (langLower.includes('pt')) {
      locale = 'pt'
    }
  }

  // Redirect to locale path
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)',],
}
