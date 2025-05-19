"use client";

import { Container } from "@/components/ui/container";
import { ArrowDownToLine, Store } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-20 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-violet-800/30 to-purple-900/30 blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute right-10 bottom-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-700/30 to-blue-800/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 -top-6 w-20 h-20 rounded-full bg-violet-500/10 blur-xl"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight animate-hero-fadein">
                Experience The Future<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-300 animate-hero-shimmer inline-block">
                  In Your Hands
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-indigo-100/80 font-light max-w-lg animate-hero-fadein delay-150">
              Redefine what&apos;s possible with our innovative mobile app. 
              Beautiful interface, powerful features, and intuitive experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="glow-button group animate-hero-cta-pulse">
                <span className="relative z-10">Try Beta Now</span>
                <div className="absolute inset-0 rounded-full bg-white/10 blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-50"></div>
              </a>
              
              <div className="glassmorphism flex items-center gap-x-3 px-5 py-3 cursor-pointer hover:bg-white/5 transition-colors animate-hero-float-card delay-200">
                <div className="neumorphism w-10 h-10 flex items-center justify-center">
                  <Store className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200/70">Download from</p>
                  <p className="text-white font-medium">App Store</p>
                </div>
              </div>
              
              <div className="glassmorphism flex items-center gap-x-3 px-5 py-3 cursor-pointer hover:bg-white/5 transition-colors animate-hero-float-card delay-300">
                <div className="neumorphism w-10 h-10 flex items-center justify-center">
                  <ArrowDownToLine className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200/70">Download from</p>
                  <p className="text-white font-medium">Play Store</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Animated glowing ring under phone */}
            <div className="absolute left-1/2 top-[85%] -translate-x-1/2 z-0">
              <div className="w-60 h-16 rounded-full bg-gradient-to-r from-indigo-500/30 via-blue-500/40 to-violet-500/30 blur-2xl animate-hero-glowring"></div>
              <div className="w-40 h-4 rounded-full bg-blue-400/30 blur-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative flex justify-center animate-hero-phone-float">
              {/* Education app UI */}
              <div className="relative transform rotate-[12deg] hover:rotate-[8deg] transition-transform duration-700">
                <Image 
                  src="/hero correct.png" 
                  alt="Education App Interface" 
                  width={380} 
                  height={700}
                  className="rounded-[26px] object-contain z-10 relative hover:scale-105 transition-all duration-700"
                  style={{ 
                    filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.15))",
                    maxHeight: "75vh"
                  }}
                  priority
                />
                {/* Subtle glass effect overlay */}
                <div className="absolute inset-0 rounded-[26px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none"></div>
              </div>
              {/* Floating UI cards with staggered fade/float */}
              <div className="absolute top-5 -left-16 animate-hero-float-card delay-300">
                <div className="glassmorphism w-32 p-3 rounded-xl backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-indigo-400/80"></div>
                    <div className="h-2 w-16 bg-indigo-300/30 rounded"></div>
                  </div>
                  <div className="h-2 w-full bg-indigo-200/20 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-indigo-200/20 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-16 -right-14 animate-hero-float-card delay-500">
                <div className="glassmorphism w-36 p-3 rounded-xl backdrop-blur-md">
                  <div className="h-8 w-8 rounded-lg bg-violet-400/20 mb-2 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-sm bg-violet-300/40"></div>
                  </div>
                  <div className="h-2 w-full bg-indigo-200/20 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-indigo-200/20 rounded"></div>
                </div>
              </div>
              <div className="absolute top-1/3 -right-10 transform -translate-y-1/2 animate-hero-float-card delay-700">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-indigo-400/40"></div>
                </div>
              </div>
              <div className="absolute bottom-1/4 -left-8 animate-hero-float-card delay-900">
                <div className="w-8 h-8 rounded-full bg-violet-500/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-violet-400/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 