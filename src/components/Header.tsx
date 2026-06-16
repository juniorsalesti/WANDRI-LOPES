import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Dumbbell, Award, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenAssessment: () => void;
}

export default function Header({ onOpenAssessment }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#benefits_section' },
    { name: 'Resultados', href: '#results_section' },
    { name: 'Programas', href: '#programs_section' },
    { name: 'Método', href: '#why_choose_me_section' },
    { name: 'Como Funciona', href: '#timeline_section' },
    { name: 'Sobre o Coach', href: '#about_coach_section' },
    { name: 'Planos', href: '#pricing_section' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main glass sticky header */}
      <header
        id="navbar"
        className={`sticky top-0 z-30 transition-all duration-300 w-full ${
          scrolled
            ? 'glass-panel border-b border-white/5 py-4 shadow-lg shadow-black/30'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo with premium badge */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-neon-green/15 border border-neon-green/30 group-hover:bg-neon-green/25 transition-all">
              <Dumbbell className="w-5 h-5 text-neon-green rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl letter tracking-tight text-white flex items-center gap-1 leading-none uppercase">
                WANDRI LOPES
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold uppercase leading-none mt-0.5">SISTEMA ELITE</span>
            </div>
          </a>

          {/* Large display desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                id={`nav_${link.name.toLowerCase().replace(/ /g, '_')}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-neutral-400 hover:text-neon-green transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-green after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="cta_nav"
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-lg bg-neon-green text-black font-display font-extrabold text-sm uppercase tracking-wider transition-all hover:bg-neon-green/90 shadow-md hover:shadow-neon-green/10 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Screen responsiveness controls (Mobile hamburger) */}
          <button
            id="mobile_hamburger"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 border border-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Full screen mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-md flex flex-col justify-between p-8 animation-fade-in animate-duration-150">
          
          {/* Top segment */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-neon-green/15 text-neon-green">
                <Dumbbell className="w-5 h-5 rotate-[-45deg]" />
              </div>
              <span className="font-display font-black text-xl text-white uppercase tracking-tight">
                WANDRI LOPES
              </span>
            </div>
            <button
              id="mobile_close"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 border border-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links cluster */}
          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                id={`mobile_nav_${link.name.toLowerCase().replace(/ /g, '_')}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-display font-bold text-white hover:text-neon-green transition-colors text-gradient flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-neon-green" />
              </a>
            ))}
          </nav>

          {/* Footer of menu */}
          <div className="space-y-4">
            <a
              id="cta_mobile_nav"
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-neon-green text-black font-display font-black text-base uppercase tracking-wider shadow-lg shadow-neon-green/10 cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 font-mono">
              <Shield className="w-4 h-4 text-neon-green" />
              <span>Mentoria por Wandri Lopes, Certificado Pro.</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
