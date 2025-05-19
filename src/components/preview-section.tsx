"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function PreviewSection() {
  return (
    <section id="preview" className="relative py-24 overflow-hidden">
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
            <div className="relative flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
              {/* Phone UI (main focus) */}
              <div className="glassmorphism p-3 rounded-2xl shadow-xl flex items-center justify-center max-w-[340px] mx-auto md:mx-0 md:mt-8">
                <Image
                  src="/images/ChatGPT Image May 19, 2025, 05_02_39 AM.png"
                  alt="App Phone UI"
                  width={300}
                  height={500}
                  className="rounded-xl w-auto h-auto max-h-[400px]"
                />
              </div>
              {/* Dashboard UI */}
              <div className="glassmorphism p-3 rounded-2xl shadow-xl flex items-center justify-center max-w-[320px] mx-auto md:mx-0 md:-mt-8">
                <Image
                  src="/images/ChatGPT Image May 19, 2025, 05_13_38 AM.png"
                  alt="App Dashboard UI"
                  width={300}
                  height={300}
                  className="rounded-xl w-auto h-auto max-h-[260px]"
                />
              </div>
              {/* Try Beta Now Card */}
              <div className="glassmorphism p-3 rounded-2xl shadow-xl flex items-center justify-center max-w-[260px] mx-auto md:mx-0 md:mt-8">
                <Image
                  src="/images/ChatGPT Image May 19, 2025, 05_14_57 AM.png"
                  alt="Try Beta Now Card"
                  width={220}
                  height={260}
                  className="rounded-xl w-auto h-auto max-h-[180px]"
                />
              </div>
              {/* Feature Tiles */}
              <div className="glassmorphism p-3 rounded-2xl shadow-xl flex items-center justify-center max-w-[260px] mx-auto md:mx-0 md:-mt-8">
                <Image
                  src="/images/ChatGPT Image May 19, 2025, 05_17_31 AM.png"
                  alt="Feature Tiles"
                  width={220}
                  height={220}
                  className="rounded-xl w-auto h-auto max-h-[180px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}