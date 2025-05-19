"use client";

import { Container } from "@/components/ui/container";
import { ArrowDownToLine, Store } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-20 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-violet-800/30 to-purple-900/30 blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute right-10 bottom-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-700/30 to-blue-800/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 -top-6 w-20 h-20 rounded-full bg-violet-500/10 blur-xl"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Experience The Future<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-300">
                  In Your Hands
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-indigo-100/80 font-light max-w-lg">
              Redefine what's possible with our innovative mobile app. 
              Beautiful interface, powerful features, and intuitive experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="glow-button group">
                <span className="relative z-10">Try Beta Now</span>
                <div className="absolute inset-0 rounded-full bg-white/10 blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-50"></div>
              </a>
              
              <div className="glassmorphism flex items-center gap-x-3 px-5 py-3 cursor-pointer hover:bg-white/5 transition-colors">
                <div className="neumorphism w-10 h-10 flex items-center justify-center">
                  <Store className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <p className="text-xs text-indigo-200/70">Download from</p>
                  <p className="text-white font-medium">App Store</p>
                </div>
              </div>
              
              <div className="glassmorphism flex items-center gap-x-3 px-5 py-3 cursor-pointer hover:bg-white/5 transition-colors">
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
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-indigo-600/30 blur-3xl animate-pulse"></div>
              <div className="absolute w-32 h-32 rounded-full bg-violet-600/30 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            </div>
            
            <div className="relative flex justify-center animate-float">
              {/* Device frame with realistic Education app UI */}
              <div className="relative transform rotate-[15deg] shadow-2xl">
                <Image 
                  src="/hero correct.png" 
                  alt="Education App Interface" 
                  width={300} 
                  height={600}
                  className="rounded-[40px] object-cover border-8 border-[#1a1a2d] z-10 relative"
                />
                
                {/* Add reflections and highlights for realistic effect */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none border-8 border-[#1a1a2d]"></div>
              </div>
              
              {/* Floating UI cards */}
              <div className="absolute top-10 -left-12 animate-float" style={{ animationDelay: "1s" }}>
                <div className="glassmorphism w-28 p-3">
                  <div className="h-2 w-full bg-indigo-200/20 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-indigo-200/20 rounded"></div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-14 animate-float" style={{ animationDelay: "2s" }}>
                <div className="glassmorphism w-32 p-3">
                  <div className="h-8 w-8 rounded-lg bg-indigo-400/20 mb-2"></div>
                  <div className="h-2 w-full bg-indigo-200/20 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-indigo-200/20 rounded"></div>
                </div>
              </div>

              {/* Extra floating element for visual interest */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-400/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 