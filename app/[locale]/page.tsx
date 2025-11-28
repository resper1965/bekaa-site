import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Privacy } from '@/components/sections/Privacy'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Privacy dict={dict} />
        <Contact dict={dict} />
        <Footer dict={dict} />
      </main>
    </>
  )
}
