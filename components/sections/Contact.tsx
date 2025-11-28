"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
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

        {/* Contact Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 border-0 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-gold" />
            </div>
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
