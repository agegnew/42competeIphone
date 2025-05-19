"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { Activity, Gauge, Lock, Zap } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built with performance in mind. Experience instant responses and smooth animations.",
    icon: <Zap className="w-6 h-6 text-indigo-300" />,
    gradient: "from-blue-500/20 to-indigo-600/20",
  },
  {
    title: "Ultra Secure",
    description: "Advanced encryption and security protocols to protect your sensitive data.",
    icon: <Lock className="w-6 h-6 text-indigo-300" />,
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    title: "Real-time Analytics",
    description: "Get detailed insights and analytics about your activity in real-time.",
    icon: <Activity className="w-6 h-6 text-indigo-300" />,
    gradient: "from-indigo-500/20 to-blue-600/20",
  },
  {
    title: "Optimized Performance",
    description: "Our app is optimized for battery life and minimal resource usage.",
    icon: <Gauge className="w-6 h-6 text-indigo-300" />,
    gradient: "from-purple-500/20 to-violet-600/20",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-20 translate-x-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-violet-700/30 to-indigo-800/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute left-1/4 bottom-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-700/30 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "3s" }}></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-8 backdrop-blur-[30px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="neumorphism w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-indigo-100/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 