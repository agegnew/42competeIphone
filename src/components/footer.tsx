"use client";

import { Container } from "@/components/ui/container";
import { Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/5">
      <Container>
        <div className="glassmorphism rounded-b-none border-b-0 px-8 py-10 -mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
                <h3 className="text-xl font-bold text-white">App Logo</h3>
              </div>
              <p className="text-indigo-100/70 text-sm">
                Experience the future of mobile applications with our innovative design and powerful features.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Integrations</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-indigo-100/70 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="flex space-x-3">
                <a href="#" className="neumorphism w-10 h-10 flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-indigo-300" />
                </a>
                <a href="#" className="neumorphism w-10 h-10 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-indigo-300" />
                </a>
                <a href="#" className="neumorphism w-10 h-10 flex items-center justify-center">
                  <Github className="w-4 h-4 text-indigo-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/5 text-center">
          <p className="text-indigo-100/50 text-sm">
            © {new Date().getFullYear()} App Name. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
} 