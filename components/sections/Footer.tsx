import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

interface FooterProps {
  dict: any;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <img
              src="/bekaa.svg"
              alt="Bekaa"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm font-normal mb-6">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-normal">{dict.footer.location}</span>
            </div>
          </div>

          {/* Brasil Office */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">{dict.contact.brasil}</h4>
            <div className="space-y-3 text-sm font-normal">
              <p className="text-gray-300 leading-relaxed">
                Rua Conceição de Monte Alegre, 107<br />
                Bloco A, Conj 82<br />
                São Paulo - SP<br />
                CEP 04563-060
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+5511993833122"
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  +55 11 99383-3122
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{dict.footer.navigation}</h4>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  {dict.footer.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  {dict.footer.contact}
                </a>
              </li>
              <li>
                <a href="mailto:contact@bekaa.eu" className="text-gray-300 hover:text-gold transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@bekaa.eu
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/bekaa-trusted-advisors/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold transition-colors flex items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400 font-normal">
          <p>{dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
