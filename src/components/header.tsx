"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from "@/components/ui/container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3 backdrop-blur-xl bg-black/40 shadow-lg shadow-black/10 border-b border-indigo-500/10' : 'py-5 bg-transparent'
    }`}>
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-32 h-32 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute top-0 right-1/4 translate-x-1/2 w-32 h-32 rounded-full bg-violet-600/20 blur-3xl"></div>
        </div>
      )}
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-2 header-anim opacity-0 group">
            <div className="relative h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-400 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/30 transition-all duration-300">
              <span className="font-bold text-white text-xl">E</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-300 animate-pulse"></div>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight group-hover:text-indigo-200 transition-colors">Eduscape</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-8 header-anim opacity-0 header-anim-delay-1">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#preview">Preview</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing" hasDropdown>Pricing</NavLink>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-x-4 header-anim opacity-0 header-anim-delay-2">
            <Link 
              href="/auth/login" 
              className="text-indigo-100 hover:text-white transition-colors px-4 py-2 text-sm"
            >
              Log in
            </Link>
            <Link 
              href="/auth/signup" 
              className="glassmorphism px-4 py-2 text-sm font-medium text-white rounded-full hover:bg-white/10 transition-colors hover:scale-105 duration-300"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors header-anim opacity-0 header-anim-delay-1" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glassmorphism rounded-xl py-4 px-2 flex flex-col gap-y-3 backdrop-blur-xl border-t border-indigo-500/20">
            <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-2"></div>
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#preview">Preview</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <div className="border-t border-white/10 my-2"></div>
            <MobileNavLink href="/auth/login">Log in</MobileNavLink>
            <MobileNavLink href="/auth/signup" isButton>
              <span className="flex items-center justify-center gap-2">
                Get Started
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </span>
            </MobileNavLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

function NavLink({ href, children, hasDropdown = false }: NavLinkProps) {
  const isActive = typeof window !== 'undefined' && window.location.hash === href;
  
  return (
    <Link 
      href={href} 
      className={`relative group text-sm font-medium flex items-center gap-x-1 transition-colors ${
        isActive ? 'text-white' : 'text-indigo-100 hover:text-white'
      }`}
    >
      {children}
      {hasDropdown && <ChevronDown size={16} />}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}

function MobileNavLink({ href, children, isButton = false }: MobileNavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
        isButton 
          ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90' 
          : 'text-indigo-100 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
} 