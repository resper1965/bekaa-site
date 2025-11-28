import { getDictionary, type Locale } from '@/lib/i18n'
import { Navigation } from '@/components/common/Navigation'
import { Footer } from '@/components/sections/Footer'
import { PrivacyPolicy } from '@/components/sections/PrivacyPolicy'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="min-h-screen pt-20">
        <PrivacyPolicy locale={locale} />
        <Footer dict={dict} />
      </main>
    </>
  )
}
