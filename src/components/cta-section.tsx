"use client";

import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-violet-800/20 to-indigo-900/30 blur-3xl opacity-40 animate-pulse"></div>

      <Container className="relative z-10">
        <div className="glassmorphism max-w-4xl mx-auto p-12 backdrop-blur-[30px]">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Mobile Experience?
            </h2>
            
            <p className="text-lg text-indigo-100/70 max-w-2xl mx-auto">
              Join thousands of users already enjoying our revolutionary app. 
              Sign up for early access and be the first to experience the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="#" 
                className="glow-button flex items-center justify-center gap-2"
              >
                Try Beta Now
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#" 
                className="text-white hover:text-indigo-200 transition-colors border border-indigo-400/30 px-8 py-3 rounded-full hover:bg-indigo-500/10"
              >
                Learn More
              </a>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-indigo-200/50">
                No credit card required • Free for 14 days • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 