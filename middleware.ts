import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'pt', 'es', 'fr']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip if already has locale or is a static file
  if (
    locales.some(locale => pathname.startsWith(`/${locale}`)) ||
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
  if (localeCookie && locales.includes(localeCookie)) {
    locale = localeCookie
  } else if (acceptLanguage) {
    const langLower = acceptLanguage.toLowerCase()
    // Check for specific languages
    if (langLower.includes('pt')) {
      locale = 'pt'
    } else if (langLower.includes('es')) {
      locale = 'es'
    } else if (langLower.includes('fr')) {
      locale = 'fr'
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
