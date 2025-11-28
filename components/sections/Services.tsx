"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle, Search, Brain, FileCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const icons = [AlertCircle, Shield, Search, Brain, FileCheck, Users];

interface ServicesProps {
  dict: any;
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white">
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
            {dict.services.label}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-navy mb-6">
            {dict.services.title}
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            {dict.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dict.services.items.map((service: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed font-normal">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
