"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { type Locale } from "@/lib/i18n";

interface NavigationProps {
  dict: any;
  locale: Locale;
}

export function Navigation({ dict, locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Store locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    // Navigate to new locale
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy/95 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/BEKAA_transparent.png"
              alt="Bekaa"
              width={140}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`transition-colors font-normal ${
                isScrolled 
                  ? 'text-gray-300 hover:text-gold' 
                  : 'text-gray-600 hover:text-gold'
              }`}
            >
              {dict.nav.services}
            </a>

            {/* CTA Button */}
            <Button size="sm" asChild>
              <a href="#contact">{dict.nav.getInTouch}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden py-4 border-t ${isScrolled ? 'border-gray-800' : 'border-gray-100'}`}>
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className={`transition-colors font-normal ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-gold' 
                    : 'text-gray-600 hover:text-gold'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {dict.nav.services}
              </a>

              <Button className="w-full mt-4" asChild>
                <a href="#contact">{dict.nav.getInTouch}</a>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Discrete Language Switcher - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 px-3 py-2 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500" />
          <button
            onClick={() => switchLocale('en')}
            className={`text-xs px-2 py-1 rounded-full transition-all font-normal ${
              locale === 'en'
                ? "bg-gold text-white"
                : "text-gray-600 hover:text-gold hover:bg-gold/10"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => switchLocale('pt')}
            className={`text-xs px-2 py-1 rounded-full transition-all font-normal ${
              locale === 'pt'
                ? "bg-gold text-white"
                : "text-gray-600 hover:text-gold hover:bg-gold/10"
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </nav>
  );
}
