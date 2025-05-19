"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { Activity, Gauge, Lock, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Lightning Fast",
    description: "Built with performance in mind. Experience instant responses and smooth animations.",
    icon: <Zap className="w-6 h-6 text-indigo-300" />,
    gradient: "from-blue-500/20 to-indigo-600/20",
    glowColor: "blue-500/30",
    highlight: "400ms response time"
  },
  {
    title: "Ultra Secure",
    description: "Advanced encryption and security protocols to protect your sensitive data.",
    icon: <Lock className="w-6 h-6 text-indigo-300" />,
    gradient: "from-violet-500/20 to-purple-600/20",
    glowColor: "violet-500/30",
    highlight: "End-to-end encryption"
  },
  {
    title: "Real-time Analytics",
    description: "Get detailed insights and analytics about your activity in real-time.",
    icon: <Activity className="w-6 h-6 text-indigo-300" />,
    gradient: "from-indigo-500/20 to-blue-600/20",
    glowColor: "indigo-500/30",
    highlight: "Live data updates"
  },
  {
    title: "Optimized Performance",
    description: "Our app is optimized for battery life and minimal resource usage.",
    icon: <Gauge className="w-6 h-6 text-indigo-300" />,
    gradient: "from-purple-500/20 to-violet-600/20",
    glowColor: "purple-500/30",
    highlight: "Low battery impact"
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 translate-x-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-violet-700/30 to-indigo-800/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute left-1/4 bottom-10 w-60 h-60 rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-700/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "3s" }}></div>

      <Container className="relative z-10">
        <div className="relative">
          <div className="absolute -left-4 -top-10 w-28 h-28 rounded-full bg-indigo-500/10 blur-xl"></div>
          <SectionHeading
            title="Powerful Features"
            description="Discover what makes our app stand out from the competition. Designed with user experience as our top priority."
            center
            className="max-w-3xl mx-auto mb-16"
          />
        </div>

        {/* App screenshot showcase */}
        <div className="relative mb-20 flex justify-center">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl opacity-60"></div>
          
          <div className="relative glassmorphism p-4 rounded-3xl overflow-hidden max-w-2xl mx-auto">
            <Image
              src="/images/ChatGPT Image May 19, 2025, 05_02_39 AM.png"
              alt="Mobile App Interface"
              width={800}
              height={400}
              className="rounded-2xl object-cover" 
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 pointer-events-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-8 backdrop-blur-[30px] transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] relative overflow-hidden group rounded-3xl"
            >
              {/* Glowing background effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl group-hover:blur-2xl rounded-3xl`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-start justify-between">
                  <div className="glassmorphism bg-black/20 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform rounded-2xl shadow-md shadow-black/5">
                    {feature.icon}
                  </div>
                  <div className="py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                    {feature.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-indigo-100/70 mb-6">{feature.description}</p>
                
                <div className="mt-auto">
                  <a href="#" className="flex items-center text-indigo-300 text-sm hover:text-indigo-200 transition-colors gap-1 group/link">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 