"use client";

import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = [Shield, Lock, FileCheck, UserCheck];

interface PrivacyProps {
  dict: any;
}

export function Privacy({ dict }: PrivacyProps) {
  return (
    <section id="privacy" className="py-24 bg-white">
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
            {dict.privacy.label}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-6">
            {dict.privacy.title}
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            {dict.privacy.subtitle}
          </p>
        </motion.div>

        {/* Privacy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {dict.privacy.points.map((point: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-0 shadow-md hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-lg text-navy mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 font-normal text-sm leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Privacy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 border-0 shadow-lg bg-gray-50">
            <h3 className="font-semibold text-xl text-navy mb-4">
              {dict.privacy.statement.title}
            </h3>
            <div className="space-y-4 text-gray-600 font-normal leading-relaxed">
              {dict.privacy.statement.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>
                  {paragraph.includes('privacy@bekaa.eu') ? (
                    <>
                      {paragraph.split('privacy@bekaa.eu')[0]}
                      <a href="mailto:privacy@bekaa.eu" className="text-gold hover:underline">
                        privacy@bekaa.eu
                      </a>
                      {paragraph.split('privacy@bekaa.eu')[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
