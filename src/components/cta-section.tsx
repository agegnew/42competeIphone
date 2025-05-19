"use client";

import { Container } from "@/components/ui/container";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function CtaSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-800/20 to-indigo-900/30 blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute right-1/3 bottom-1/4 w-24 h-24 rounded-full bg-indigo-600/20 blur-2xl opacity-60"></div>
      <div className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full bg-violet-600/20 blur-2xl opacity-60"></div>

      <Container className="relative z-10">
        <div className="glassmorphism max-w-5xl mx-auto p-10 md:p-14 backdrop-blur-[30px] rounded-[40px] border border-indigo-500/10 shadow-xl shadow-indigo-500/5 overflow-hidden">
          {/* Glowing accent elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent blur-sm"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
                <span className="text-indigo-300 text-sm font-medium">4.9/5 from over 1,200 reviews</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-300">Transform</span> Your Mobile Experience?
              </h2>
              
              <p className="text-lg text-indigo-100/80">
                Join thousands of users already enjoying our revolutionary app. 
                Sign up for early access and be the first to experience the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#" 
                  className="glow-button flex items-center justify-center gap-2 px-8"
                >
                  Try Beta Now
                  <ArrowRight className="w-4 h-4" />
                </a>
                
                <a 
                  href="#" 
                  className="text-white hover:text-indigo-200 transition-colors border border-indigo-400/30 px-8 py-3 rounded-full hover:bg-indigo-500/10 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
              
              <div className="pt-2">
                <p className="text-sm text-indigo-200/60">
                  No credit card required • Free for 14 days • Cancel anytime
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative">
              <div className="relative">
                {/* CTA Image */}
                <div className="relative glassmorphism rounded-3xl p-3 backdrop-blur-md border border-white/10 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                  <Image 
                    src="/images/ChatGPT Image May 19, 2025, 05_13_38 AM.png"
                    alt="App Interface" 
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                  
                  {/* Badge overlay */}
                  <div className="absolute -top-4 -right-4 glassmorphism py-2 px-4 rounded-full bg-black/30 text-white text-sm font-medium shadow-lg">
                    New Feature
                  </div>
                </div>
                
                {/* Glowing circle at the bottom */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent blur-md"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-4 bg-blue-500/30 blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 