"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface ContactProps {
  dict: any;
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gold font-normal tracking-wider uppercase mb-4">
            {dict.contact.label}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-6">
            {dict.contact.title}
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            {dict.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Brasil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-navy mb-2">{dict.contact.brasil}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">
                    Rua Conceição de Monte Alegre, 107<br />
                    Bloco A, Conj 82 - Cidade Monções<br />
                    São Paulo - SP<br />
                    CEP 04563-060
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+5511993833122"
                  className="text-gray-700 hover:text-gold transition-colors font-normal"
                >
                  +55 11 99383-3122
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Portugal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl text-navy mb-2">{dict.contact.portugal}</h3>
                  <p className="text-gray-600 font-normal leading-relaxed">
                    Lisboa, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <Globe className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-gray-700 font-normal">{dict.contact.europeOps}</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 border-0 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-gold" />
              <h3 className="font-semibold text-xl text-navy">{dict.contact.email.title}</h3>
            </div>
            <p className="text-gray-600 font-normal mb-6">
              {dict.contact.email.subtitle}
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contact@bekaa.eu">
                contact@bekaa.eu
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
