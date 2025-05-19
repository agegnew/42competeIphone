"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight } from "lucide-react";

export function PreviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-800/30 to-purple-900/30 blur-3xl opacity-60 animate-pulse"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <div className="absolute -left-4 -top-6 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl"></div>
              <SectionHeading
                title="See The App In Action"
                description="Experience our beautiful interface and seamless user experience. Designed for simplicity and efficiency."
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-0.5 w-12 bg-indigo-500 rounded-full glow-sm"></div>
                <h3 className="text-xl font-bold text-white">Intuitive Navigation</h3>
                <p className="text-indigo-100/70">Swipe, tap, and navigate through the app with natural gestures that feel intuitive.</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-0.5 w-12 bg-indigo-500 rounded-full glow-sm"></div>
                <h3 className="text-xl font-bold text-white">Beautiful Visuals</h3>
                <p className="text-indigo-100/70">Enjoy smooth animations and transitions that enhance the user experience.</p>
              </div>
              
              <a href="#" className="flex items-center text-indigo-300 hover:text-indigo-200 transition-colors gap-2 mt-6 group">
                <span className="font-medium">View more details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-indigo-600/30 blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-6 pt-12">
                    <div className="glassmorphism p-6 aspect-square flex items-center justify-center transition-all duration-500 hover:shadow-lg hover:scale-[1.02] group">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 flex items-center justify-center group-hover:from-indigo-500/20 group-hover:to-violet-500/20 transition-all duration-500">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 group-hover:scale-110 transition-transform"></div>
                      </div>
                    </div>
                    <div className="glassmorphism p-6 aspect-[3/4] transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
                      <div className="space-y-4">
                        <div className="h-2 bg-indigo-300/20 rounded w-full"></div>
                        <div className="h-2 bg-indigo-300/20 rounded w-2/3"></div>
                        <div className="h-2 bg-indigo-300/20 rounded w-5/6"></div>
                        <div className="h-2 bg-indigo-300/20 rounded w-1/2"></div>
                        <div className="mt-8 flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-indigo-400/30"></div>
                          <div className="w-3 h-3 rounded-full bg-indigo-400/20"></div>
                          <div className="w-3 h-3 rounded-full bg-indigo-400/10"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="glassmorphism p-6 aspect-[3/4] transition-all duration-500 hover:shadow-lg hover:scale-[1.02] group">
                      <div className="space-y-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400/20 to-violet-500/20 mx-auto group-hover:scale-110 transition-transform"></div>
                        <div className="h-2 bg-indigo-300/20 rounded w-4/5 mx-auto"></div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-20 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"></div>
                          <div className="h-20 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"></div>
                          <div className="h-20 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"></div>
                          <div className="h-20 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"></div>
                        </div>
                      </div>
                    </div>
                    <div className="glassmorphism p-6 aspect-square transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
                      <div className="h-full rounded-xl bg-gradient-to-br from-indigo-800/30 to-purple-900/30 hover:from-indigo-800/40 hover:to-purple-900/40 transition-colors"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-20">
                    <div className="glassmorphism p-6 aspect-square transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
                      <div className="h-full rounded-lg bg-indigo-600/10 flex items-center justify-center">
                        <div className="w-16 h-1 bg-indigo-400/30 rounded-full"></div>
                      </div>
                    </div>
                    <div className="glassmorphism p-6 aspect-[3/4] transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/20"></div>
                          <div className="w-6 h-6 rounded-md bg-indigo-500/20"></div>
                        </div>
                        <div className="pt-6">
                          <div className="h-2 bg-indigo-300/20 rounded w-full mb-2"></div>
                          <div className="h-2 bg-indigo-300/20 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-indigo-300/20 rounded w-5/6"></div>
                        </div>
                        <div className="mt-10 h-24 rounded-lg bg-indigo-500/10 bg-gradient-to-tr from-transparent to-indigo-500/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 