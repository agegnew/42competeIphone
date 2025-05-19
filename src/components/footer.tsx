"use client";

import { Container } from "@/components/ui/container";
import { Github, Instagram, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="pricing" className="relative pt-12 pb-6 overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute left-20 bottom-20 w-24 h-24 rounded-full bg-indigo-600/10 blur-xl"></div>
      <div className="absolute right-20 bottom-40 w-32 h-32 rounded-full bg-violet-600/10 blur-xl"></div>

      <Container>
        <div className="glassmorphism rounded-3xl border-white/10 px-8 py-10 backdrop-blur-xl shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="space-y-6 md:col-span-4">
              <div className="flex items-center space-x-2">
                <div className="relative h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-400 flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white text-xl">E</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-300 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-white">Eduscape</h3>
              </div>
              <p className="text-indigo-100/70 text-sm leading-relaxed max-w-xs">
                Experience the future of mobile applications with our innovative design and powerful features.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="glassmorphism w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform bg-black/20 hover:bg-indigo-500/20">
                  <Twitter className="w-4 h-4 text-indigo-300" />
                </a>
                <a href="#" className="glassmorphism w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform bg-black/20 hover:bg-indigo-500/20">
                  <Instagram className="w-4 h-4 text-indigo-300" />
                </a>
                <a href="#" className="glassmorphism w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform bg-black/20 hover:bg-indigo-500/20">
                  <Github className="w-4 h-4 text-indigo-300" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Features</Link></li>
                <li><Link href="#pricing" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Pricing</Link></li>
                <li><Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Integrations</Link></li>
                <li><Link href="#preview" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Demo</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Careers</Link></li>
                <li><Link href="#testimonials" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <h4 className="text-white font-medium mb-4">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-black/20 border border-indigo-500/20 rounded-l-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 w-full"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-r-full py-2 px-4 text-white">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-indigo-100/50">
                We'll never share your details. See our <Link href="#" className="text-indigo-300 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/5">
          <p className="text-indigo-100/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Eduscape. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Terms</Link>
            <Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Cookies</Link>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="glassmorphism w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform mt-4 md:mt-0 bg-black/20"
          >
            <ArrowUp className="w-4 h-4 text-indigo-300" />
          </button>
        </div>
      </Container>
    </footer>
  );
} 